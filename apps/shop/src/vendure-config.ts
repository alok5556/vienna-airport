import path from 'node:path';
import {
  DefaultJobQueuePlugin,
  DefaultSearchPlugin,
  LanguageCode,
  VendureConfig,
} from '@vendure/core';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';

export const config: VendureConfig = {
  apiOptions: {
    port: 3002,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    cors: true,
  },
  authOptions: {
    tokenMethod: ['bearer', 'cookie'],
    superadminCredentials: {
      identifier: process.env.SHOP_SUPERADMIN_USER ?? 'superadmin',
      password: process.env.SHOP_SUPERADMIN_PASSWORD ?? 'superadmin',
    },
    cookieOptions: {
      secret: process.env.SHOP_COOKIE_SECRET ?? 'cookie-secret',
    },
  },
  dbConnectionOptions: {
    type: 'postgres',
    synchronize: false,
    migrations: [path.join(process.cwd(), 'src/migrations/*.+(js|ts)')],
    logging: false,
    database: process.env.SHOP_DB_NAME ?? 'vienna_shop',
    schema: 'public',
    host: process.env.SHOP_DB_HOST ?? 'localhost',
    port: Number(process.env.SHOP_DB_PORT ?? 5432),
    username: process.env.SHOP_DB_USER ?? 'postgres',
    password: process.env.SHOP_DB_PASSWORD ?? 'postgres',
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  customFields: {
    Product: [
      { type: 'string', name: 'serviceType', options: [{ value: 'parking' }, { value: 'fasttrack' }, { value: 'lounges' }, { value: 'porter' }, { value: 'premium' }] },
      { type: 'boolean', name: 'dynamicPricing', defaultValue: false },
      { type: 'datetime', name: 'availableFrom', nullable: true },
      { type: 'datetime', name: 'availableTo', nullable: true },
    ],
    ProductVariant: [
      { type: 'boolean', name: 'bundleEligible', defaultValue: false },
      { type: 'int', name: 'availability', defaultValue: 0 },
    ],
  },
  plugins: [
    AssetServerPlugin.init({
      route: 'assets',
      assetUploadDir: path.join(process.cwd(), 'static/assets'),
    }),
    DefaultJobQueuePlugin.init({ useDatabaseForBuffer: true }),
    DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: true }),
    AdminUiPlugin.init({ route: 'admin', port: 3003 }),
  ],
  catalogOptions: {
    productVariantPriceSelectionStrategy: undefined,
  },
  defaultChannelToken: 'default-channel',
  defaultLanguageCode: LanguageCode.en,
};
