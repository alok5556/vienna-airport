import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';

export function generateStaticParams() {
  return ['en', 'de', 'sk', 'cz', 'hu'].map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <div className="mx-auto min-h-screen max-w-6xl px-4 py-6">
        <header className="mb-8 flex items-center justify-between">
          <nav className="flex gap-4 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
          </nav>
          <LanguageSwitcher />
        </header>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
