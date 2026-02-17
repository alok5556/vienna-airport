export declare const locales: readonly ['en', 'de', 'sk', 'cz', 'hu'];
export type Locale = (typeof locales)[number];
export declare const defaultLocale: Locale;
export declare const localeLabels: Record<Locale, string>;
export declare const directionByLocale: Record<Locale, 'ltr' | 'rtl'>;
