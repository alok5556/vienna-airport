import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'de', 'sk', 'cz', 'hu']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))

  if (hasLocale || pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
