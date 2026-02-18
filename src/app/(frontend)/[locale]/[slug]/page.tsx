import { RenderBlocks } from '../../../../blocks/RenderBlocks'
import { LivePreviewListener } from '../../../../components/LivePreviewListener'

export default async function LocalizedPage({ params }: { params: { slug: string; locale: string } }) {
  const { slug, locale } = params
  const page = { slug, locale, layout: [] }

  return (
    <main>
      <LivePreviewListener />
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}
