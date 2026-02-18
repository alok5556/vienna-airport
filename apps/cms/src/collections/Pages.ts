import type { CollectionConfig, Field } from 'payload';
import {
  HeroBlock,
  TextBlock,
  RichTextBlock,
  ImageBlock,
  GalleryBlock,
  CTABlock,
  AccordionBlock,
  FAQBlock,
  TestimonialsBlock,
  FeaturesBlock,
  StatsBlock,
  VideoBlock,
  FormBlock,
  PricingTableBlock,
  CustomHTMLBlock,
} from '../blocks';

const translationStatus: Field = {
  name: 'translationStatus',
  type: 'select',
  options: ['draft', 'in_review', 'translated', 'published'],
  defaultValue: 'draft',
  localized: true,
};

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt', 'translationStatus'],
    livePreview: {
      url: ({ data, locale }: { data: Record<string, unknown>; locale: string }) => `${process.env.WEB_URL}/${locale}/${data?.slug ?? ''}`,
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 30000,
      },
      schedulePublish: true,
      validate: true,
    },
    maxPerDoc: 100,
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, index: true, unique: true },
    {
      name: 'workflowState',
      type: 'select',
      options: ['draft', 'review', 'published'],
      defaultValue: 'draft',
      required: true,
    },
    { name: 'reviewerEmail', type: 'email' },
    { name: 'publishAt', type: 'date' },
    { name: 'expiresAt', type: 'date' },
    { name: 'versionNotes', type: 'textarea' },
    translationStatus,
    {
      name: 'seo',
      type: 'group',
      localized: true,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'keywords', type: 'array', fields: [{ name: 'value', type: 'text' }] },
      ],
    },
    {
      name: 'template',
      type: 'select',
      options: ['default', 'landing', 'service', 'pricing'],
      defaultValue: 'default',
    },
    {
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock,
        TextBlock,
        RichTextBlock,
        ImageBlock,
        GalleryBlock,
        CTABlock,
        AccordionBlock,
        FAQBlock,
        TestimonialsBlock,
        FeaturesBlock,
        StatsBlock,
        VideoBlock,
        FormBlock,
        PricingTableBlock,
        CustomHTMLBlock,
      ],
    },
  ],
};
