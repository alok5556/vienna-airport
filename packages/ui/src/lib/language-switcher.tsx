'use client';

import type { Locale } from '@vienna/types';

export interface LanguageSwitcherProps {
  current: Locale;
  locales: readonly Locale[];
  onChange: (locale: Locale) => void;
}

export function LanguageSwitcher({ current, locales, onChange }: LanguageSwitcherProps) {
  return (
    <select
      aria-label="Language selector"
      value={current}
      onChange={(event) => onChange(event.target.value as Locale)}
      className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
