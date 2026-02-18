import type { Block } from 'payload';

export const createSimpleBlock = (slug: string, fields: Block['fields']): Block => ({
  slug,
  interfaceName: `${slug[0]?.toUpperCase() ?? ''}${slug.slice(1)}Block`,
  fields
});
