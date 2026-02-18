'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Container, LanguageSwitcher } from '@vienna/ui';
import { locales, type Locale } from '@vienna/types';

export function Header({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="border-b bg-white py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Vienna Airport</div>
          <LanguageSwitcher
            current={locale}
            locales={locales}
            onChange={(nextLocale: Locale) => {
              const nextPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
              router.push(nextPath);
            }}
          />
        </div>
      </Container>
    </header>
  );
}
