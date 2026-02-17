import 'dotenv/config';
import { bootstrap } from '@vendure/core';
import { vendureConfig } from './vendure-config';

bootstrap(vendureConfig)
  .then(() => {
    console.log('Vendure server started on http://localhost:3002');
  })
  .catch((error) => {
    console.error(error);
  });
