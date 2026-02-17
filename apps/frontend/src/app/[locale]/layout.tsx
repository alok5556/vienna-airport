import { directionByLocale, locales, type Locale } from '@va/config/i18n';
import { notFound } from 'next/navigation';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div dir={directionByLocale[locale]} lang={locale}>
      {children}
    </div>
  );
}
