import type { Locale } from '@va/types';
import { notFound } from 'next/navigation';
import { BlockRenderer } from '@/components/blocks/BlockRenderer';
import { createMetadata } from '@/components/common/Seo';
import { getPageBySlug } from '@/lib/payload';

export async function generateMetadata({ params }: { params: { locale: Locale; slug?: string[] } }) {
  const page = await getPageBySlug(params.slug?.join('/') || 'home', params.locale);
  if (!page) return {};
  return createMetadata(page.seo);
}

export default async function DynamicPage({ params }: { params: { locale: Locale; slug?: string[] } }) {
  const slug = params.slug?.join('/') || 'home';
  const page = await getPageBySlug(slug, params.locale);

  if (!page) notFound();

  return (
    <main className="space-y-8">
      <h1 className="text-3xl font-bold">{page.slug}</h1>
      <BlockRenderer blocks={page.blocks as Array<Record<string, unknown>>} locale={params.locale} />
    </main>
  );
}
