/* eslint-disable @next/next/no-server-import-in-page */
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (token && pathname.includes('/login')) {
    const dullUrl = new URL('/', req.url);
     return NextResponse.redirect(dullUrl.toString());
  }

  if (!token && pathname !== "/login") {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl.toString());
  }
}