import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'de', 'sk', 'cs', 'hu']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale || pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!api|.*\\..*).*)'],
}
