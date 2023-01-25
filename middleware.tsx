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
    const url = new URL('/', req.url)
    return NextResponse.rewrite(url);
  }

  if (!token && pathname !== "/login") {
    const url = req.nextUrl.href
    return NextResponse.rewrite(url);
  }
}