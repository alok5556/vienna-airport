export const generatePreviewURL = ({ slug, locale }: { slug?: string; locale?: string }) => {
  const normalizedLocale = locale || 'en'
  const normalizedSlug = slug || ''
  const path = normalizedSlug.length > 0 ? `/${normalizedLocale}/${normalizedSlug}` : `/${normalizedLocale}`

  return `${process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000'}${path}`
}
