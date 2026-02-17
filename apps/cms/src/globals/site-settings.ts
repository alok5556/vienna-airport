import type { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      localized: true,
    },
  ],
};
