import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/dashboard")) return NextResponse.next();
  const token = request.cookies.get("drip_access")?.value;
  if (!token) return NextResponse.redirect(new URL("/login?next=/dashboard", request.url));
  try {
    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) throw new Error("JWT secret missing");
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret), { issuer: "drip-burgers", audience: "drip-web" });
    if (!['ADMIN','MANAGER','STAFF'].includes(String(payload.role))) throw new Error("Forbidden");
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/login?next=/dashboard", request.url));
    response.cookies.delete("drip_access");
    return response;
  }
}

export const config = { matcher: ["/dashboard/:path*"] };
