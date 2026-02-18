import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  fields: [
    { name: 'label', type: 'text', localized: true },
    { name: 'href', type: 'text' },
  ],
}
