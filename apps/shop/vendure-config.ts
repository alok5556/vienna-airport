import {
  DefaultJobQueuePlugin,
  DefaultSearchPlugin,
  LanguageCode,
  VendureConfig,
  defaultEmailHandlers,
  mergeConfig
} from '@vendure/core';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { AirportServicesPlugin } from './src/plugins/airport-services.plugin';
import { BundlesPlugin } from './src/plugins/bundles.plugin';

const PORT = Number(process.env.PORT ?? 3002);

const config: VendureConfig = {
  apiOptions: {
    port: PORT,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    cors: true
  },
  authOptions: {
    superadminCredentials: {
      identifier: process.env.SUPERADMIN_USERNAME ?? 'superadmin',
      password: process.env.SUPERADMIN_PASSWORD ?? 'superadmin'
    },
    cookieOptions: {
      secret: process.env.COOKIE_SECRET ?? 'cookie-secret'
    }
  },
  dbConnectionOptions: {
    type: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 5432),
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'postgres',
    database: process.env.DB_NAME ?? 'vienna_airport',
    schema: process.env.DB_SCHEMA ?? 'vendure',
    synchronize: true
  },
  paymentOptions: {
    paymentMethodHandlers: []
  },
  customFields: {},
  plugins: [
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    AirportServicesPlugin,
    BundlesPlugin,
    AdminUiPlugin.init({
      route: 'admin',
      port: PORT + 2
    })
  ],
  defaultLanguageCode: LanguageCode.en,
  availableLanguageCodes: [
    LanguageCode.en,
    LanguageCode.de,
    LanguageCode.sk,
    LanguageCode.cs,
    LanguageCode.hu
  ]
};

export default mergeConfig(config, {
  emailOptions: {
    handlers: defaultEmailHandlers,
    templatePath: './src/email/templates',
    outputPath: './static/email/test-emails'
  }
});
