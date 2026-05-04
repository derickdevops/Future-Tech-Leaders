import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAdminAuthCookieName } from "@/lib/admin-auth";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get(getAdminAuthCookieName());

  if (authCookie?.value === "1") {
    return NextResponse.next();
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*"]
};
