import type { Block } from 'payload';

const titleField = { name: 'title', type: 'text', localized: true } as const;

export const HeroBlock: Block = { slug: 'hero', fields: [titleField, { name: 'subtitle', type: 'textarea', localized: true }] };
export const TextBlock: Block = { slug: 'text', fields: [{ name: 'content', type: 'textarea', localized: true }] };
export const RichTextBlock: Block = { slug: 'richText', fields: [{ name: 'content', type: 'richText', localized: true }] };
export const ImageBlock: Block = { slug: 'image', fields: [{ name: 'image', type: 'upload', relationTo: 'media' }, { name: 'alt', type: 'text', localized: true }] };
export const GalleryBlock: Block = { slug: 'gallery', fields: [{ name: 'images', type: 'array', fields: [{ name: 'image', type: 'upload', relationTo: 'media' }] }] };
export const CTABlock: Block = { slug: 'cta', fields: [titleField, { name: 'label', type: 'text', localized: true }, { name: 'href', type: 'text' }] };
export const AccordionBlock: Block = { slug: 'accordion', fields: [{ name: 'items', type: 'array', fields: [{ name: 'question', type: 'text', localized: true }, { name: 'answer', type: 'textarea', localized: true }] }] };
export const FAQBlock: Block = { slug: 'faq', fields: [{ name: 'items', type: 'array', fields: [{ name: 'q', type: 'text', localized: true }, { name: 'a', type: 'textarea', localized: true }] }] };
export const TestimonialsBlock: Block = { slug: 'testimonials', fields: [{ name: 'items', type: 'array', fields: [{ name: 'author', type: 'text' }, { name: 'quote', type: 'textarea', localized: true }] }] };
export const FeaturesBlock: Block = { slug: 'features', fields: [{ name: 'items', type: 'array', fields: [{ name: 'name', type: 'text', localized: true }, { name: 'description', type: 'textarea', localized: true }] }] };
export const StatsBlock: Block = { slug: 'stats', fields: [{ name: 'items', type: 'array', fields: [{ name: 'label', type: 'text', localized: true }, { name: 'value', type: 'number' }] }] };
export const VideoBlock: Block = { slug: 'video', fields: [{ name: 'url', type: 'text' }, { name: 'poster', type: 'upload', relationTo: 'media' }] };
export const FormBlock: Block = { slug: 'form', fields: [{ name: 'formId', type: 'text', required: true }] };
export const PricingTableBlock: Block = { slug: 'pricingTable', fields: [{ name: 'plans', type: 'array', fields: [{ name: 'name', type: 'text', localized: true }, { name: 'price', type: 'number' }, { name: 'features', type: 'array', fields: [{ name: 'feature', type: 'text', localized: true }] }] }] };
export const CustomHTMLBlock: Block = { slug: 'customHTML', fields: [{ name: 'html', type: 'code', required: true }] };
