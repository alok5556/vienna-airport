import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'sk', 'cz', 'hu'],
  defaultLocale: 'en',
  localePrefix: 'always'
});
