import type { Locale } from '@va/config/i18n';

export const dictionaries: Record<Locale, { title: string; subtitle: string; cta: string; cards: string[] }> = {
  en: {
    title: 'Vienna Airport Digital Platform',
    subtitle: 'Headless CMS + Commerce ready architecture with multilingual publishing.',
    cta: 'Explore destinations',
    cards: ['Fast content publishing', 'Localized storefront experience', 'Composable architecture'],
  },
  de: {
    title: 'Digitale Plattform Flughafen Wien',
    subtitle: 'Headless-CMS- und Commerce-fähige Architektur mit mehrsprachiger Veröffentlichung.',
    cta: 'Reiseziele entdecken',
    cards: ['Schnelles Content-Publishing', 'Lokalisierter Shop', 'Composable Architektur'],
  },
  sk: {
    title: 'Digitálna platforma Letiska Viedeň',
    subtitle: 'Architektúra pripravená na Headless CMS a Commerce s viacjazyčným publikovaním.',
    cta: 'Preskúmať destinácie',
    cards: ['Rýchle publikovanie obsahu', 'Lokalizovaný obchod', 'Composable architektúra'],
  },
  cz: {
    title: 'Digitální platforma Letiště Vídeň',
    subtitle: 'Architektura připravená pro Headless CMS a Commerce s vícejazyčným publikováním.',
    cta: 'Prozkoumat destinace',
    cards: ['Rychlé publikování obsahu', 'Lokalizovaný e-shop', 'Composable architektura'],
  },
  hu: {
    title: 'Bécsi repülőtér digitális platformja',
    subtitle: 'Headless CMS + Commerce architektúra többnyelvű publikálással.',
    cta: 'Úticélok felfedezése',
    cards: ['Gyors tartalomközzététel', 'Lokalizált webáruház', 'Composable architektúra'],
  },
};
