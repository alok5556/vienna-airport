import { AccordionBlockComponent } from './Accordion/Component'
import { CTABlockComponent } from './CTA/Component'
import { FAQBlockComponent } from './FAQ/Component'
import { FeaturesBlockComponent } from './Features/Component'
import { FormBlockComponent } from './Form/Component'
import { GalleryBlockComponent } from './Gallery/Component'
import { HeroBlockComponent } from './Hero/Component'
import { HTMLEmbedBlockComponent } from './HTMLEmbed/Component'
import { ImageBlockComponent } from './Image/Component'
import { MapBlockComponent } from './Map/Component'
import { PricingTableBlockComponent } from './PricingTable/Component'
import { SpacerBlockComponent } from './Spacer/Component'
import { TestimonialsBlockComponent } from './Testimonials/Component'
import { TextBlockComponent } from './Text/Component'
import { VideoBlockComponent } from './Video/Component'

type Block = {
  id?: string
  blockType: string
  [key: string]: unknown
}

const blockMap: Record<string, (props: { block: Block }) => JSX.Element> = {
  hero: HeroBlockComponent,
  text: TextBlockComponent,
  image: ImageBlockComponent,
  video: VideoBlockComponent,
  gallery: GalleryBlockComponent,
  cta: CTABlockComponent,
  faq: FAQBlockComponent,
  accordion: AccordionBlockComponent,
  features: FeaturesBlockComponent,
  testimonials: TestimonialsBlockComponent,
  pricingTable: PricingTableBlockComponent,
  form: FormBlockComponent,
  map: MapBlockComponent,
  spacer: SpacerBlockComponent,
  htmlEmbed: HTMLEmbedBlockComponent,
}

export const RenderBlocks = ({ blocks }: { blocks?: Block[] }) => {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockMap[block.blockType]
        if (!Component) return null

        return <Component key={block.id || `${block.blockType}-${index}`} block={block} />
      })}
    </>
  )
}
