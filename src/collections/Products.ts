import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    { name: 'slug', type: 'text', localized: true, required: true },
    {
      name: 'variants',
      type: 'array',
      fields: [
        { name: 'sku', type: 'text', required: true },
        { name: 'label', type: 'text', localized: true },
      ],
    },
    { name: 'price', type: 'number', required: true },
    { name: 'stock', type: 'number', defaultValue: 0 },
    {
      name: 'availability',
      type: 'select',
      options: ['in_stock', 'out_of_stock', 'preorder'],
      defaultValue: 'in_stock',
    },
    {
      name: 'bundleItems',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
    },
    {
      name: 'categories',
      type: 'array',
      fields: [{ name: 'name', type: 'text', localized: true }],
    },
    { name: 'dynamicPricingPlaceholder', type: 'json' },
  ],
}
