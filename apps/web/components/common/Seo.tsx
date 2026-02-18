import type { SeoLocalized } from '@va/types';

export const createMetadata = (seo: SeoLocalized) => ({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords
});
