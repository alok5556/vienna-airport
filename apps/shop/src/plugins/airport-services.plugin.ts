import { LanguageCode, PluginCommonModule, VendurePlugin } from '@vendure/core';

@VendurePlugin({
  imports: [PluginCommonModule],
  configuration: (config) => {
    config.customFields.Product.push(
      {
        type: 'string',
        name: 'serviceCategory',
        options: [
          { value: 'parking', label: [{ languageCode: LanguageCode.en, value: 'Parking' }] },
          { value: 'fasttrack', label: [{ languageCode: LanguageCode.en, value: 'FastTrack' }] },
          { value: 'lounges', label: [{ languageCode: LanguageCode.en, value: 'Lounges' }] },
          { value: 'porter', label: [{ languageCode: LanguageCode.en, value: 'Porter service' }] },
          { value: 'premium', label: [{ languageCode: LanguageCode.en, value: 'Premium service' }] }
        ]
      },
      { type: 'json', name: 'dynamicPricingRules', nullable: true },
      { type: 'string', name: 'availabilityRule', nullable: true }
    );

    config.customFields.ProductVariant.push(
      { type: 'string', name: 'zoneVariant', nullable: true },
      { type: 'string', name: 'loungeType', nullable: true },
      { type: 'string', name: 'serviceLevel', nullable: true },
      { type: 'json', name: 'variantImages', nullable: true }
    );

    return config;
  }
})
export class AirportServicesPlugin {}
