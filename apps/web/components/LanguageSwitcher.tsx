'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LOCALE_LABELS, SUPPORTED_LOCALES } from '../lib/i18n'

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()
  const pathWithoutLocale = pathname.replace(/^\/(en|de|sk|cs|hu)/, '') || '/'

  return (
    <div className="flex flex-wrap gap-2">
      {SUPPORTED_LOCALES.map((locale) => {
        const href = `/${locale}${pathWithoutLocale}`
        const active = locale === currentLocale

        return (
          <Link
            key={locale}
            href={href}
            className={`rounded-full border px-3 py-1 text-xs ${
              active ? 'border-blue-400 bg-blue-500/30' : 'border-white/20 hover:border-white/40'
            }`}
          >
            {LOCALE_LABELS[locale]}
          </Link>
        )
      })}
    </div>
  )
}
