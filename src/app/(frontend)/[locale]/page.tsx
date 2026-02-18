import { RenderBlocks } from '../../../blocks/RenderBlocks'
import { LivePreviewListener } from '../../../components/LivePreviewListener'

export default async function LocalizedHomePage() {
  const data = { layout: [] }

  return (
    <main>
      <LivePreviewListener />
      <RenderBlocks blocks={data.layout} />
    </main>
  )
}
