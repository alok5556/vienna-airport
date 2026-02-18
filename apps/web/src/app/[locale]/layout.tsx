import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@vienna/types';
import '../globals.css';
import { Header } from '../../components/header';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={params.locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
