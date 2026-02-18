import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@vienna/ui';
import { fetchPage } from '../../lib/payload-client';
import { BlockRenderer } from '../../components/block-renderer';
import { CartPanel } from '../../components/cart-panel';
import { LocaleMeta } from '../../components/locale-meta';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const page = await fetchPage(params.locale, 'home').catch(() => null);
  return {
    title: page?.seo?.title ?? page?.title ?? 'Vienna Airport',
    description: page?.seo?.description ?? 'Vienna Airport services',
  };
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const page = await fetchPage(params.locale, 'home').catch(() => null);
  if (!page) notFound();

  return (
    <main className="py-10">
      <Container>
        <h1 className="mb-6 text-4xl font-bold">{page.title}</h1>
        <LocaleMeta locale={params.locale} />
        <div className='grid gap-6 lg:grid-cols-[2fr_1fr]'>
          <BlockRenderer blocks={page.blocks} />
          <CartPanel locale={params.locale} />
        </div>
      </Container>
    </main>
  );
}
