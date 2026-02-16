import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    imageSizes: [
      { name: 'thumb', width: 320, height: 240 },
      { name: 'card', width: 768, height: 432 },
      { name: 'hero', width: 1600, height: 900 },
    ],
    formatOptions: {
      format: 'webp',
      options: { quality: 82 },
    },
    adminThumbnail: 'thumb',
    mimeTypes: ['image/*', 'video/mp4', 'application/pdf'],
  },
  fields: [
    {
      name: 'folder',
      type: 'text',
      admin: { description: 'Folder path, e.g. brand/campaign/summer-2026' },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
    {
      name: 'customUpload',
      type: 'json',
      admin: {
        components: {
          Field: {
            path: '@/components/DragDropUploadField#DragDropUploadField',
          },
        },
      },
    },
    {
      name: 'rightsExpiration',
      type: 'date',
    },
  ],
}
