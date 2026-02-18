import { defineRouting } from 'next-intl/routing';
import { locales } from '@vienna/types';

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: 'en',
  localePrefix: 'always',
});
