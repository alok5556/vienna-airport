import { PluginCommonModule, VendurePlugin } from '@vendure/core';

@VendurePlugin({
  imports: [PluginCommonModule],
  configuration: (config) => {
    config.customFields.Product.push(
      { type: 'boolean', name: 'isBundle', defaultValue: false },
      { type: 'json', name: 'bundleItems', nullable: true },
      { type: 'string', name: 'bundleDiscountType', nullable: true },
      { type: 'int', name: 'bundleDiscountValue', nullable: true }
    );
    return config;
  }
})
export class BundlesPlugin {}
