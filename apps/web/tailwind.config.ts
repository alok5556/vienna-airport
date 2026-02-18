import type { Config } from 'tailwindcss';
import { tailwindContent } from '@vienna/config/src/index';

const config: Config = {
  content: [...tailwindContent],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
