import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createSession, REFRESH_COOKIE, verifyRefreshToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST() {
  try {
    const token = (await cookies()).get(REFRESH_COOKIE)?.value;
    if (!token) return NextResponse.json({ error: "Missing refresh token" }, { status: 401 });
    const payload = await verifyRefreshToken(token);
    const stored = await prisma.refreshToken.findUnique({ where: { jti: payload.jti } });
    if (!stored || stored.revokedAt || stored.expiresAt <= new Date()) return NextResponse.json({ error: "Refresh token expired" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user || !user.isActive) return NextResponse.json({ error: "User unavailable" }, { status: 401 });
    await prisma.refreshToken.update({ where: { jti: payload.jti }, data: { revokedAt: new Date() } });
    await createSession({ id: user.id, email: user.email, name: user.name, role: user.role });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
  }
}
