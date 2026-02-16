import { notFound } from 'next/navigation'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { isSupportedLocale } from '@/lib/i18n'

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!isSupportedLocale(params.locale)) notFound()

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-10">
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Vienna Airport</h1>
        <LanguageSwitcher currentLocale={params.locale} />
      </header>
      {children}
    </div>
  )
}
