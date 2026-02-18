import type { Field } from 'payload';

export const seoFields: Field[] = [
  { name: 'title', type: 'text', required: true, localized: true },
  { name: 'description', type: 'textarea', required: true, localized: true },
  { name: 'keywords', type: 'text', localized: true }
];
