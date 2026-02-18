import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
      'image/gif',
      'video/mp4',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    imageSizes: [
      { name: 'thumbnail', width: 320, height: 240, fit: 'cover' },
      { name: 'medium', width: 1024, height: undefined },
      { name: 'large', width: 1920, height: undefined },
    ],
    formatOptions: {
      format: 'webp',
      options: { quality: 80 },
    },
  },
  fields: [
    { name: 'alt', type: 'text', localized: true },
    { name: 'folder', type: 'text' },
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        { name: 'author', type: 'text' },
        { name: 'copyright', type: 'text' },
        { name: 'license', type: 'text' },
      ],
    },
    { name: 'rightsExpirationDate', type: 'date' },
    { name: 'usageTracking', type: 'textarea' },
  ],
}
