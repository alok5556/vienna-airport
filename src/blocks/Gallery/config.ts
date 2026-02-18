import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery',
  fields: [
    { name: 'images', type: 'upload', relationTo: 'media', hasMany: true },
  ],
}
