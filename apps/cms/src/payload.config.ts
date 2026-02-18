import path from 'node:path';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { Pages } from './collections/Pages';
import { Media } from './collections/Media';
import { Users } from './collections/Users';
import { reviewersHook } from './hooks/reviewersHook';
import { damSyncJob } from './jobs/damSync';

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(process.cwd()),
    },
    livePreview: {
      url: ({ data }: { data: Record<string, unknown> }) => `${process.env.WEB_URL}/${data?.locale ?? 'en'}/${data?.slug ?? ''}`,
    },
  },
  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
      { code: 'sk', label: 'Slovak' },
      { code: 'cz', label: 'Czech' },
      { code: 'hu', label: 'Hungarian' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  jobs: {
    tasks: [damSyncJob],
    autoRun: [{ task: 'dam-sync', interval: 900000 }],
  },
  collections: [Users, Pages, Media],
  hooks: {
    afterChange: [reviewersHook],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 30000,
      },
    },
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  email: nodemailerAdapter({
    defaultFromAddress: 'noreply@vienna-airport.local',
    defaultFromName: 'Vienna Airport CMS',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 1025),
      secure: false,
    },
  }),
  plugins: [seoPlugin({ collections: ['pages'] })],
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts'),
  },
});
