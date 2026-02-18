import type { CollectionConfig } from 'payload';
import { pageBlocks } from '../../blocks';
import { seoFields } from '../../fields/seo';
import { reviewerNotification } from '../../hooks/reviewerNotification';
import { sourceChangeNotification } from '../../hooks/sourceChangeNotification';

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 30000
      },
      schedulePublish: true
    },
    maxPerDoc: 100
  },
  admin: {
    useAsTitle: 'slug',
    livePreview: {
      url: ({ data, locale }) => `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/${data.slug}`
    },
    defaultColumns: ['slug', 'status', 'translationStatus', 'updatedAt']
  },
  hooks: {
    afterChange: [reviewerNotification, sourceChangeNotification]
  },
  fields: [
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Review', value: 'review' },
        { label: 'Published', value: 'published' }
      ]
    },
    {
      name: 'translationStatus',
      type: 'select',
      defaultValue: 'not_started',
      options: ['not_started', 'in_progress', 'review', 'done'].map((value) => ({ label: value, value }))
    },
    { name: 'expiresAt', type: 'date' },
    { name: 'versionNotes', type: 'textarea' },
    {
      name: 'translationEditor',
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          Field: '/src/components/SideBySideTranslation.tsx'
        }
      }
    },
    {
      name: 'template',
      type: 'relationship',
      relationTo: 'templates'
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: pageBlocks,
      required: true,
      admin: {
        initCollapsed: true
      }
    },
    {
      name: 'seo',
      type: 'group',
      fields: seoFields
    }
  ]
};
