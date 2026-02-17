'use client';

import { localeLabels, locales, type Locale } from '@va/config/i18n';
import { usePathname, useRouter } from 'next/navigation';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (nextLocale: Locale) => {
    const cleanPath = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${nextLocale}${cleanPath}`);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow">
      <span className="text-xs font-semibold uppercase text-slate-500">Language</span>
      <select
        aria-label="Select language"
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
        onChange={(event) => onChange(event.target.value as Locale)}
        value={locale}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </div>
  );
}
