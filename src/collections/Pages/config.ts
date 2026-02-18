import type { CollectionConfig } from 'payload'

import { pageWorkflowHook } from '../../hooks/pageWorkflow'
import { reviewNotificationHook } from '../../hooks/reviewNotification'
import { generatePreviewURL } from '../../utilities/previewURL'

import { HeroBlock } from '../../blocks/Hero/config'
import { TextBlock } from '../../blocks/Text/config'
import { ImageBlock } from '../../blocks/Image/config'
import { VideoBlock } from '../../blocks/Video/config'
import { GalleryBlock } from '../../blocks/Gallery/config'
import { CTABlock } from '../../blocks/CTA/config'
import { FAQBlock } from '../../blocks/FAQ/config'
import { AccordionBlock } from '../../blocks/Accordion/config'
import { FeaturesBlock } from '../../blocks/Features/config'
import { TestimonialsBlock } from '../../blocks/Testimonials/config'
import { PricingTableBlock } from '../../blocks/PricingTable/config'
import { FormBlock } from '../../blocks/Form/config'
import { MapBlock } from '../../blocks/Map/config'
import { SpacerBlock } from '../../blocks/Spacer/config'
import { HTMLEmbedBlock } from '../../blocks/HTMLEmbed/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    preview: (doc, { locale }) =>
      generatePreviewURL({ slug: typeof doc.slug === 'string' ? doc.slug : undefined, locale }),
    livePreview: {
      url: ({ data, locale }) =>
        generatePreviewURL({ slug: typeof data?.slug === 'string' ? data.slug : undefined, locale }),
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 30000,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  hooks: {
    beforeChange: [pageWorkflowHook],
    afterChange: [reviewNotificationHook],
  },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    { name: 'slug', type: 'text', localized: true, required: true, index: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Review', value: 'review' },
        { label: 'Published', value: 'published' },
      ],
      required: true,
    },
    { name: 'scheduledPublishAt', type: 'date' },
    { name: 'expiresAt', type: 'date' },
    { name: 'versionNotes', type: 'textarea' },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        TextBlock,
        ImageBlock,
        VideoBlock,
        GalleryBlock,
        CTABlock,
        FAQBlock,
        AccordionBlock,
        FeaturesBlock,
        TestimonialsBlock,
        PricingTableBlock,
        FormBlock,
        MapBlock,
        SpacerBlock,
        HTMLEmbedBlock,
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text', localized: true },
        { name: 'metaDescription', type: 'textarea', localized: true },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
        { name: 'canonicalUrl', type: 'text', localized: true },
      ],
    },
  ],
}
