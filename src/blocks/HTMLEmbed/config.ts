import type { Block } from 'payload'

export const HTMLEmbedBlock: Block = {
  slug: 'htmlEmbed',
  fields: [
    { name: 'html', type: 'code', admin: { language: 'html' } },
  ],
}
