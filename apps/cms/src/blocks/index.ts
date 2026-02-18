import type { Block } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { createSimpleBlock } from '../types/blocks';

export const HeroBlock: Block = createSimpleBlock('hero', [
  { name: 'headline', type: 'text', required: true, localized: true },
  { name: 'subheadline', type: 'textarea', localized: true },
  { name: 'backgroundImage', type: 'upload', relationTo: 'media' }
]);

export const TextBlock: Block = createSimpleBlock('text', [
  { name: 'content', type: 'textarea', required: true, localized: true }
]);

export const RichTextBlock: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
      editor: lexicalEditor({})
    }
  ]
};

export const ImageBlock: Block = createSimpleBlock('image', [
  { name: 'image', type: 'upload', relationTo: 'media', required: true },
  { name: 'caption', type: 'text', localized: true }
]);

export const GalleryBlock: Block = createSimpleBlock('gallery', [
  {
    name: 'images',
    type: 'array',
    fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }]
  }
]);

export const CtaBlock: Block = createSimpleBlock('cta', [
  { name: 'title', type: 'text', localized: true },
  { name: 'buttonLabel', type: 'text', required: true, localized: true },
  { name: 'buttonHref', type: 'text', required: true }
]);

export const AccordionBlock: Block = createSimpleBlock('accordion', [
  {
    name: 'items',
    type: 'array',
    fields: [
      { name: 'title', type: 'text', localized: true, required: true },
      { name: 'content', type: 'textarea', localized: true }
    ]
  }
]);

export const FaqBlock: Block = createSimpleBlock('faq', [
  {
    name: 'questions',
    type: 'array',
    fields: [
      { name: 'question', type: 'text', localized: true, required: true },
      { name: 'answer', type: 'textarea', localized: true, required: true }
    ]
  }
]);

export const TestimonialsBlock: Block = createSimpleBlock('testimonials', [
  {
    name: 'items',
    type: 'array',
    fields: [
      { name: 'quote', type: 'textarea', localized: true },
      { name: 'author', type: 'text', localized: true }
    ]
  }
]);

export const FeaturesBlock: Block = createSimpleBlock('features', [
  {
    name: 'items',
    type: 'array',
    fields: [
      { name: 'title', type: 'text', localized: true },
      { name: 'description', type: 'textarea', localized: true }
    ]
  }
]);

export const StatsBlock: Block = createSimpleBlock('stats', [
  {
    name: 'items',
    type: 'array',
    fields: [
      { name: 'label', type: 'text', localized: true },
      { name: 'value', type: 'number' }
    ]
  }
]);

export const VideoBlock: Block = createSimpleBlock('video', [
  { name: 'videoUrl', type: 'text', required: true },
  { name: 'title', type: 'text', localized: true }
]);

export const FormBlock: Block = createSimpleBlock('form', [
  { name: 'formId', type: 'text', required: true },
  { name: 'submitLabel', type: 'text', localized: true }
]);

export const PricingTableBlock: Block = createSimpleBlock('pricingTable', [
  {
    name: 'plans',
    type: 'array',
    fields: [
      { name: 'name', type: 'text', localized: true },
      { name: 'price', type: 'number' },
      { name: 'currency', type: 'text', defaultValue: 'EUR' },
      { name: 'features', type: 'array', fields: [{ name: 'value', type: 'text', localized: true }] }
    ]
  }
]);

export const CustomHtmlBlock: Block = createSimpleBlock('customHTML', [
  { name: 'html', type: 'code', required: true, admin: { language: 'html' } }
]);

export const pageBlocks = [
  HeroBlock,
  TextBlock,
  RichTextBlock,
  ImageBlock,
  GalleryBlock,
  CtaBlock,
  AccordionBlock,
  FaqBlock,
  TestimonialsBlock,
  FeaturesBlock,
  StatsBlock,
  VideoBlock,
  FormBlock,
  PricingTableBlock,
  CustomHtmlBlock
];
