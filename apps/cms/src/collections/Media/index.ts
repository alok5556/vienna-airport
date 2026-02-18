import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true
  },
  upload: {
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
      'image/gif',
      'video/mp4',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ],
    imageSizes: [
      { name: 'sm', width: 480, withoutEnlargement: true },
      { name: 'md', width: 960, withoutEnlargement: true },
      { name: 'lg', width: 1440, withoutEnlargement: true }
    ],
    adminThumbnail: 'sm',
    formatOptions: {
      format: 'webp'
    }
  },
  fields: [
    { name: 'alt', type: 'text', localized: true },
    { name: 'folder', type: 'text', admin: { description: 'Use / separated paths for nested folders' } },
    { name: 'tags', type: 'array', fields: [{ name: 'value', type: 'text' }] },
    { name: 'metadata', type: 'json' },
    { name: 'rightsExpiresAt', type: 'date' },
    { name: 'usageCount', type: 'number', defaultValue: 0 }
  ]
};
