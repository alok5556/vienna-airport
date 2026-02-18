import type { Block } from 'payload'

export const PricingTableBlock: Block = {
  slug: 'pricingTable',
  fields: [
    {
      name: 'plans',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', localized: true },
        { name: 'price', type: 'number' },
        { name: 'features', type: 'array', fields: [{ name: 'value', type: 'text', localized: true }] },
      ],
    },
  ],
}
