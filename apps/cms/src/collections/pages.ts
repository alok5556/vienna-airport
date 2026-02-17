import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { CollectionConfig } from 'payload';
import { dragDropUploadField } from '@/fields/dragDropUpload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'heroText',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({}),
    },
    dragDropUploadField,
  ],
};
