import { defaultLocale, locales, type Locale } from '@va/config/i18n';
import { Hero } from '@/components/hero';
import { LanguageSwitcher } from '@/components/language-switcher';
import { dictionaries } from '@/lib/dictionaries';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleHomePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dictionary = dictionaries[locale] ?? dictionaries[defaultLocale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-sm font-bold text-slate-700">Vienna Airport</span>
        <LanguageSwitcher locale={locale} />
      </header>
      <Hero {...dictionary} />
    </div>
  );
}
