import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        { name: 'mobile', width: 375, height: 812 },
        { name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: {
    lexical: true,
  },
  i18n: {
    supportedLanguages: {
      en: { label: 'English' },
      de: { label: 'Deutsch' },
      sk: { label: 'Slovenčina' },
      cs: { label: 'Čeština' },
      hu: { label: 'Magyar' },
    },
    fallbackLanguage: 'en',
  },
  localization: {
    locales: ['en', 'de', 'sk', 'cs', 'hu'],
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [Pages, Media],
  globals: [SiteSettings],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
