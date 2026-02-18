import type { Locale, PagePayload } from '@va/types';
import { env } from './env';

export const getPageBySlug = async (slug: string, locale: Locale): Promise<PagePayload | null> => {
  const url = new URL('/api/pages', env.PAYLOAD_PUBLIC_SERVER_URL);
  url.searchParams.set('where[slug][equals]', slug);
  url.searchParams.set('locale', locale);
  url.searchParams.set('fallback-locale', 'en');
  url.searchParams.set('depth', '2');

  const response = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!response.ok) return null;
  const data = (await response.json()) as { docs: PagePayload[] };
  return data.docs[0] ?? null;
};
