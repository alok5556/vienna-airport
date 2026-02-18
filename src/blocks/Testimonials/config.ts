import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
  ],
}
