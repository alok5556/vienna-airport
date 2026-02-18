import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    { name: 'headline', type: 'text', localized: true, required: true },
    { name: 'subheadline', type: 'textarea', localized: true },
  ],
}
