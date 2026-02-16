import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    { name: 'siteName', type: 'text', localized: true, defaultValue: 'Vienna Airport' },
    { name: 'defaultLanguage', type: 'select', options: ['en', 'de', 'sk', 'cs', 'hu'], defaultValue: 'en' },
  ],
}
