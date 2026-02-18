import { Cart } from '@/components/shop/Cart';
import { getActiveOrder } from '@/lib/vendure';

export const dynamic = 'force-dynamic';

export default async function ShopPage({ params }: { params: { locale: string } }) {
  const cart = await getActiveOrder();

  return (
    <main className="grid gap-8 md:grid-cols-[2fr_1fr]">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="mb-3 text-2xl font-bold">Airport Services</h1>
        <p className="text-slate-600">Parking, FastTrack, Lounges, Porter and Premium service bundles are available.</p>
      </section>
      <Cart cart={cart} locale={params.locale} />
    </main>
  );
}
