export const locales = ['en', 'de', 'sk', 'cz', 'hu'] as const;

export type Locale = (typeof locales)[number];

export type TranslationStatus = 'draft' | 'in_review' | 'translated' | 'published';

export interface SeoFields {
  title: string;
  description: string;
  keywords: string[];
}

export interface PageBlockBase {
  id: string;
  blockType: string;
}

export interface Page {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  seo: SeoFields;
  blocks: PageBlockBase[];
}
