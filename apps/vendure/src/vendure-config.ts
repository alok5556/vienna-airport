import { LanguageCode, VendureConfig } from '@vendure/core';

export const vendureConfig: VendureConfig = {
  apiOptions: {
    port: 3002,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
  },
  authOptions: {
    tokenMethod: ['bearer', 'cookie'],
    superadminCredentials: {
      identifier: 'superadmin',
      password: 'superadmin',
    },
    cookieOptions: {
      secret: 'vendure-cookie-secret',
    },
  },
  dbConnectionOptions: {
    type: 'sqlite',
    database: './vendure.sqlite',
    synchronize: true,
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  customFields: {},
  defaultLanguageCode: LanguageCode.en,
};
