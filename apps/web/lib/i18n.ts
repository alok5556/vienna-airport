import { DEFAULT_LOCALE, LOCALE_LABELS, SUPPORTED_LOCALES, type AppLocale } from '@vienna/shared'

export { DEFAULT_LOCALE, LOCALE_LABELS, SUPPORTED_LOCALES }

export const isSupportedLocale = (value: string): value is AppLocale =>
  SUPPORTED_LOCALES.includes(value as AppLocale)
