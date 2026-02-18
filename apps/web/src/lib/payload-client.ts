import { z } from 'zod';

const blockSchema = z.object({
  id: z.string(),
  blockType: z.string(),
}).passthrough();

const pageSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }).optional(),
  blocks: z.array(blockSchema),
});

export async function fetchPage(locale: string, slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  if (!baseUrl) throw new Error('Missing NEXT_PUBLIC_CMS_URL');

  const response = await fetch(`${baseUrl}/api/pages?where[slug][equals]=${slug}&locale=${locale}&depth=2`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Payload request failed: ${response.status}`);
  }

  const data = await response.json() as { docs: unknown[] };
  return pageSchema.parse(data.docs[0]);
}
