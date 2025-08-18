import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (
    (url.pathname.startsWith('/admin-dashboard') && token.role !== 'Admin')
  ) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
};

export const config = {
  matcher: [
    '/add-blog',
    '/admin-dashboard/:path*',
    '/user-dashboard/:path*'
  ],
};