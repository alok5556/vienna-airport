import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const requested = locale ?? routing.defaultLocale;
  const safeLocale = routing.locales.includes(requested as never) ? requested : routing.defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../../messages/${safeLocale}.json`)).default
  };
});
