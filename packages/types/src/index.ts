export const locales = ['en', 'de', 'sk', 'cz', 'hu'] as const;
export type Locale = (typeof locales)[number];

export type TranslationStatus = 'not_started' | 'in_progress' | 'review' | 'done';

export interface SeoLocalized {
  title: string;
  description: string;
  keywords?: string;
}

export interface LocalizedValue<T> {
  en: T;
  de?: T;
  sk?: T;
  cz?: T;
  hu?: T;
}

export interface BlockBase {
  blockType: string;
  id?: string;
}

export interface PagePayload {
  id: string;
  slug: string;
  status: 'draft' | 'review' | 'published';
  translationStatus: TranslationStatus;
  updatedAt: string;
  publishedAt?: string;
  expiresAt?: string;
  locale: Locale;
  blocks: BlockBase[];
  seo: SeoLocalized;
}

export interface CartLine {
  productVariantId: string;
  quantity: number;
  unitPriceWithTax: number;
  linePriceWithTax: number;
  name: string;
}

export interface CartState {
  id: string;
  currencyCode: string;
  lines: CartLine[];
  totalWithTax: number;
}
