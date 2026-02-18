import type { CollectionConfig } from 'payload';
import { pageBlocks } from '../../blocks';

export const Templates: CollectionConfig = {
  slug: 'templates',
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    { name: 'name', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
    { name: 'blocks', type: 'blocks', blocks: pageBlocks }
  ]
};
