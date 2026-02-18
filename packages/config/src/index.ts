import { z } from 'zod';
import { locales } from '@va/types';

export const localeList = locales;

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.enum(locales).default('en'),
  PAYLOAD_PUBLIC_SERVER_URL: z.string().url(),
  VENDURE_SHOP_API_URL: z.string().url()
});

export type AppEnv = z.infer<typeof envSchema>;

export const formatters = {
  date: (locale: string) =>
    new Intl.DateTimeFormat(locale, {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }),
  number: (locale: string) =>
    new Intl.NumberFormat(locale, {
      maximumFractionDigits: 2
    }),
  currency: (locale: string, currency = 'EUR') =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    })
};
