import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif', 'video/mp4', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    imageSizes: [
      { name: 'sm', width: 320 },
      { name: 'md', width: 768 },
      { name: 'lg', width: 1280 },
    ],
    formatOptions: {
      format: 'webp',
      options: { quality: 82 },
    },
    focalPoint: true,
  },
  fields: [
    { name: 'folder', type: 'text' },
    { name: 'tags', type: 'array', fields: [{ name: 'value', type: 'text' }] },
    { name: 'metadata', type: 'group', fields: [{ name: 'author', type: 'text' }, { name: 'license', type: 'text' }, { name: 'rightsExpiration', type: 'date' }] },
    { name: 'usageCount', type: 'number', defaultValue: 0, admin: { readOnly: true } },
    { name: 'damApproved', type: 'checkbox', defaultValue: false },
  ],
};
