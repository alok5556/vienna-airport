'use client';

import { motion } from 'framer-motion';

type HeroProps = {
  title: string;
  subtitle: string;
  cta: string;
  cards: string[];
};

export function Hero({ title, subtitle, cta, cards }: HeroProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">{title}</h1>
        <p className="max-w-2xl text-lg text-slate-600">{subtitle}</p>
        <button className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-700">
          {cta}
        </button>
      </motion.div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card}
            className="rounded-2xl bg-white p-5 shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
          >
            <p className="font-medium text-slate-800">{card}</p>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
