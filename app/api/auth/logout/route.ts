import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { clearSession, REFRESH_COOKIE, verifyRefreshToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST() {
  const token = (await cookies()).get(REFRESH_COOKIE)?.value;
  if (token) {
    try {
      const payload = await verifyRefreshToken(token);
      await prisma.refreshToken.updateMany({ where: { jti: payload.jti }, data: { revokedAt: new Date() } });
    } catch {}
  }
  await clearSession();
  return NextResponse.json({ ok: true });
}
