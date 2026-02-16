import type { Block } from 'payload'

const mk = (slug: string, label: string): Block => ({
  slug,
  labels: { singular: label, plural: `${label}s` },
  fields: [
    { name: 'title', type: 'text', localized: true },
    { name: 'content', type: 'textarea', localized: true },
  ],
})

export const pageBlocks: Block[] = [
  mk('hero', 'Hero'),
  mk('richText', 'Rich Text'),
  mk('imageGallery', 'Image Gallery'),
  mk('video', 'Video'),
  mk('faq', 'FAQ'),
  mk('cta', 'Call To Action'),
  mk('featureGrid', 'Feature Grid'),
  mk('testimonial', 'Testimonial'),
  mk('stats', 'Stats'),
  mk('timeline', 'Timeline'),
  mk('pricing', 'Pricing'),
  mk('map', 'Map'),
  mk('flightSearch', 'Flight Search'),
  mk('bookingWidget', 'Booking Widget'),
  mk('serviceCards', 'Service Cards'),
]
