import { defaultLocale, locales } from '@va/config/i18n';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [...locales],
    defaultLocale,
    localeDetection: true,
  },
};

export default nextConfig;
