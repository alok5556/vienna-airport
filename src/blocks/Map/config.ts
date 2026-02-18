import type { Block } from 'payload'

export const MapBlock: Block = {
  slug: 'map',
  fields: [
    { name: 'address', type: 'text', localized: true },
    { name: 'embedUrl', type: 'text' },
  ],
}
