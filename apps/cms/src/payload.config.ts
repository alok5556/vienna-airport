import { postgresAdapter } from '@payloadcms/db-postgres';
import { buildConfig } from 'payload';
import { de, en, hu } from '@payloadcms/translations/languages';
import { defaultLocale, locales } from '@va/config/i18n';
import { Pages } from '@/collections/pages';
import { Media } from '@/collections/media';
import { SiteSettings } from '@/globals/site-settings';
import { Users } from '@/collections/users';

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: new URL('.', import.meta.url).pathname,
    },
    components: {
      graphics: {
        Logo: '@/components/Logo#Logo',
      },
    },
  },
  collections: [Users, Pages, Media],
  globals: [SiteSettings],
  localization: {
    locales: locales.map((code) => ({
      code,
      label: code.toUpperCase(),
    })),
    defaultLocale,
    fallback: true,
  },
  i18n: {
    supportedLanguages: { en, de, hu },
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/vienna_airport',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || 'replace-me',
  typescript: {
    outputFile: 'payload-types.ts',
  },
});
