import { NextRequest, NextResponse } from 'next/server';
const PUBLIC_PATHS = ['/login', '/_next', '/public'];
export function middleware(req: NextRequest) {
  if (PUBLIC_PATHS.some(p => req.nextUrl.pathname.startsWith(p))) return NextResponse.next();
  const code = process.env.ACCESS_CODE;
  if (!code) return NextResponse.next();
  const cookie = req.cookies.get('ACCESS_CODE')?.value;
  if (cookie === code) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = '/login';
  return NextResponse.redirect(url);
}
