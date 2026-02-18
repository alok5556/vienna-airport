import type { Metadata } from 'next'

export const generateMeta = ({
  metaTitle,
  metaDescription,
  canonicalUrl,
}: {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
}): Metadata => {
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  }
}
