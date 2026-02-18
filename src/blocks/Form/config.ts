import type { Block } from 'payload'

export const FormBlock: Block = {
  slug: 'form',
  fields: [
    { name: 'formId', type: 'text', required: true },
  ],
}
