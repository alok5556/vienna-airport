export const SUPPORTED_LOCALES = ['en', 'de', 'sk', 'cs', 'hu'] as const
export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: AppLocale = 'en'

export const LOCALE_LABELS: Record<AppLocale, string> = {
  en: 'English',
  de: 'Deutsch',
  sk: 'Slovenčina',
  cs: 'Čeština',
  hu: 'Magyar',
}
