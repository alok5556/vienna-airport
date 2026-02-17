import { defaultLocale, locales } from '@va/config/i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
