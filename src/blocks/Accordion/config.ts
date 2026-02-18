import type { Block } from 'payload'

export const AccordionBlock: Block = {
  slug: 'accordion',
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
