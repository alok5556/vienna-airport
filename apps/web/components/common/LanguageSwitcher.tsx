'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

const locales = ['en', 'de', 'sk', 'cz', 'hu'] as const;

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
      value={locale}
      onChange={(event) => router.replace(pathname, { locale: event.target.value })}
      aria-label="Language switcher"
    >
      {locales.map((item) => (
        <option key={item} value={item}>
          {item.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
