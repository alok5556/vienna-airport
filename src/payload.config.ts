import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

import { Pages } from './collections/Pages/config'
import { Media } from './collections/Media'
import { Products } from './collections/Products'

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(process.cwd(), 'src'),
    },
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL ?? '',
    },
  }),
  collections: [Pages, Media, Products],
  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
      { code: 'sk', label: 'Slovenský' },
      { code: 'cz', label: 'Čeština' },
      { code: 'hu', label: 'Magyar' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts'),
  },
})
