import dotenv from 'dotenv';
import payload from 'payload';

dotenv.config();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET ?? 'dev-secret',
    local: true
  });
};

void start();
