export const locales = ['en', 'de', 'sk', 'cz', 'hu'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  sk: 'Slovenčina',
  cz: 'Čeština',
  hu: 'Magyar',
};

export const directionByLocale: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  de: 'ltr',
  sk: 'ltr',
  cz: 'ltr',
  hu: 'ltr',
};
