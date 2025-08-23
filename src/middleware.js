import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl.clone();

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  if (
    !token &&
    (url.pathname.startsWith("/admin-dashboard") ||
      url.pathname.startsWith("/user-dashboard") ||
      url.pathname.startsWith("/add-blog"))
  ) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (token) {
    if (url.pathname.startsWith("/admin-dashboard") && token?.role !== "Admin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    if (url.pathname.startsWith("/user-dashboard") && token?.role !== "User") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-blog", "/admin-dashboard/:path*", "/user-dashboard/:path*"],
};
