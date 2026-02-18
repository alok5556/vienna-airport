import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { Pages } from './src/collections/Pages';
import { Media } from './src/collections/Media';
import { Templates } from './src/collections/Templates';
import { registerDamSyncJob } from './src/jobs/damSync';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname)
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 }
      ]
    }
  },
  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
      { code: 'sk', label: 'Slovenčina' },
      { code: 'cz', label: 'Čeština' },
      { code: 'hu', label: 'Magyar' }
    ],
    defaultLocale: 'en',
    fallback: true
  },
  editor: lexicalEditor({}),
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [{ name: 'name', type: 'text' }]
    },
    Pages,
    Templates,
    Media
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI
    }
  }),
  plugins: [
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
      tabbedUI: true
    })
  ],
  onInit: async (payload) => {
    registerDamSyncJob(payload);
  },
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts')
  }
});
