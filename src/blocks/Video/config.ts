import type { Block } from 'payload'

export const VideoBlock: Block = {
  slug: 'video',
  fields: [
    { name: 'videoUrl', type: 'text' },
  ],
}
