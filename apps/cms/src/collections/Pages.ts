import type { CollectionConfig } from 'payload'

import { pageBlocks } from '../blocks/pageBlocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    preview: (doc, { locale }) => {
      const selectedLocale = locale || 'en'
      const slug = doc?.slug || ''
      return `${process.env.FRONTEND_URL}/${selectedLocale}/${slug}`
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 30000,
      },
      schedulePublish: true,
    },
    maxPerDoc: 0,
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'workflowState',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Review', value: 'review' },
        { label: 'Published', value: 'published' },
      ],
      required: true,
    },
    {
      name: 'translationStatus',
      type: 'group',
      fields: [
        { name: 'en', type: 'select', options: ['todo', 'in-progress', 'done'] },
        { name: 'de', type: 'select', options: ['todo', 'in-progress', 'done'] },
        { name: 'sk', type: 'select', options: ['todo', 'in-progress', 'done'] },
        { name: 'cs', type: 'select', options: ['todo', 'in-progress', 'done'] },
        { name: 'hu', type: 'select', options: ['todo', 'in-progress', 'done'] },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text', localized: true },
        { name: 'metaDescription', type: 'textarea', localized: true },
      ],
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: pageBlocks,
      required: true,
    },
    {
      name: 'expiresAt',
      type: 'date',
      admin: {
        description: 'Optional expiration date for time-limited content.',
      },
    },
  ],
}
