'use client'

import { motion } from 'framer-motion'

const copy: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'Welcome to Vienna Airport', subtitle: 'Book services, check flights and plan your journey.' },
  de: { title: 'Willkommen am Flughafen Wien', subtitle: 'Services buchen, Flüge prüfen und Reise planen.' },
  sk: { title: 'Vitajte na letisku Viedeň', subtitle: 'Rezervujte služby, skontrolujte lety a naplánujte cestu.' },
  cs: { title: 'Vítejte na letišti Vídeň', subtitle: 'Rezervujte služby, sledujte lety a plánujte cestu.' },
  hu: { title: 'Üdvözöljük a Bécsi Repülőtéren', subtitle: 'Foglaljon szolgáltatásokat, ellenőrizze járatait és tervezzen utazást.' },
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const t = copy[params.locale] || copy.en

  return (
    <main className="space-y-10">
      <motion.section
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-white/70">{t.subtitle}</p>
      </motion.section>

      <section className="grid gap-4 md:grid-cols-3">
        {['Parking', 'FastTrack', 'Lounges'].map((service) => (
          <article key={service} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold">{service}</h3>
            <p className="mt-2 text-sm text-white/70">Basic frontend placeholder for bookable service card.</p>
          </article>
        ))}
      </section>
    </main>
  )
}
