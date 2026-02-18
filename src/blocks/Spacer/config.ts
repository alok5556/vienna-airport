import type { Block } from 'payload'

export const SpacerBlock: Block = {
  slug: 'spacer',
  fields: [
    { name: 'height', type: 'number', defaultValue: 48 },
  ],
}
