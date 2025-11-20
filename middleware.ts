import { NextRequest, NextResponse } from "next/server"

const SESSION_COOKIE = "pa_admin_token"

export function middleware(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/admin")) {
    if (!token) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      url.searchParams.set("redirect", pathname)
      return NextResponse.redirect(url)
    }
  }

  if (pathname === "/login" && token) {
    const url = request.nextUrl.clone()
    url.pathname = "/admin"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
}

