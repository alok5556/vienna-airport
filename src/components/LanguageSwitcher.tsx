'use client'

import { usePathname, useRouter } from 'next/navigation'

const locales = ['en', 'de', 'sk', 'cz', 'hu'] as const

export const LanguageSwitcher = () => {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = locales.find((locale) => pathname.startsWith(`/${locale}`)) ?? 'en'

  const switchLocale = (nextLocale: (typeof locales)[number]) => {
    const slug = pathname.replace(/^\/(en|de|sk|cz|hu)/, '') || '/'
    router.push(`/${nextLocale}${slug}`)
  }

  return (
    <select value={currentLocale} onChange={(event) => switchLocale(event.target.value as (typeof locales)[number])}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
