import 'dotenv/config';
import { bootstrap } from '@vendure/core';
import { config } from './vendure-config';

bootstrap(config).catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
