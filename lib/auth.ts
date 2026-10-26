import { cookies } from "next/headers";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { randomUUID } from "node:crypto";
import { getEnv } from "@/lib/env";
import { prisma } from "@/lib/prisma";

export const ACCESS_COOKIE = "drip_access";
export const REFRESH_COOKIE = "drip_refresh";

type TokenUser = { id: string; email: string; name: string; role: "ADMIN" | "MANAGER" | "STAFF" | "CUSTOMER" };
type AuthPayload = JWTPayload & TokenUser & { tokenType: "access" | "refresh"; jti: string };

const accessKey = () => new TextEncoder().encode(getEnv().JWT_ACCESS_SECRET);
const refreshKey = () => new TextEncoder().encode(getEnv().JWT_REFRESH_SECRET);

async function signToken(user: TokenUser, tokenType: "access" | "refresh", jti: string) {
  const env = getEnv();
  const isAccess = tokenType === "access";
  const ttl = isAccess ? `${env.ACCESS_TOKEN_TTL_MINUTES}m` : `${env.REFRESH_TOKEN_TTL_DAYS}d`;
  return new SignJWT({ ...user, tokenType, jti })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("drip-burgers")
    .setAudience("drip-web")
    .setExpirationTime(ttl)
    .sign(isAccess ? accessKey() : refreshKey());
}

export async function createSession(user: TokenUser) {
  const env = getEnv();
  const accessJti = randomUUID();
  const refreshJti = randomUUID();
  const accessToken = await signToken(user, "access", accessJti);
  const refreshToken = await signToken(user, "refresh", refreshJti);
  const refreshExpiresAt = new Date(Date.now() + env.REFRESH_TOKEN_TTL_DAYS * 86400000);

  await prisma.refreshToken.create({ data: { jti: refreshJti, userId: user.id, expiresAt: refreshExpiresAt } });
  const jar = await cookies();
  const secure = env.NODE_ENV === "production";
  jar.set(ACCESS_COOKIE, accessToken, { httpOnly: true, secure, sameSite: "lax", path: "/", maxAge: env.ACCESS_TOKEN_TTL_MINUTES * 60 });
  jar.set(REFRESH_COOKIE, refreshToken, { httpOnly: true, secure, sameSite: "lax", path: "/api/auth", maxAge: env.REFRESH_TOKEN_TTL_DAYS * 86400 });
}

export async function clearSession() {
  const jar = await cookies();
  jar.set(ACCESS_COOKIE, "", { httpOnly: true, expires: new Date(0), path: "/" });
  jar.set(REFRESH_COOKIE, "", { httpOnly: true, expires: new Date(0), path: "/api/auth" });
}

export async function verifyAccessToken(token: string): Promise<AuthPayload> {
  const { payload } = await jwtVerify(token, accessKey(), { issuer: "drip-burgers", audience: "drip-web" });
  if (payload.tokenType !== "access") throw new Error("Invalid token type");
  return payload as AuthPayload;
}

export async function verifyRefreshToken(token: string): Promise<AuthPayload> {
  const { payload } = await jwtVerify(token, refreshKey(), { issuer: "drip-burgers", audience: "drip-web" });
  if (payload.tokenType !== "refresh") throw new Error("Invalid token type");
  return payload as AuthPayload;
}

export async function getCurrentUser() {
  const token = (await cookies()).get(ACCESS_COOKIE)?.value;
  if (!token) return null;
  try {
    const payload = await verifyAccessToken(token);
    return { id: payload.id, email: payload.email, name: payload.name, role: payload.role };
  } catch {
    return null;
  }
}

export async function getAuthorizedBranches(userId: string, role: TokenUser["role"]) {
  if (role === "ADMIN") return prisma.branch.findMany({ where: { active: true }, orderBy: { name: "asc" } });
  return prisma.branch.findMany({ where: { active: true, users: { some: { userId } } }, orderBy: { name: "asc" } });
}

export function canUseDashboard(role: TokenUser["role"]) {
  return role === "ADMIN" || role === "MANAGER" || role === "STAFF";
}
