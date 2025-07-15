import type Config from '@/types/common/config.type';

import 'dotenv/config';

const config: Config = {
  env: process.env['ENV'] ?? 'LOCAL',
  port: Number.parseInt(process.env['PORT'] ?? '3000'),
  logger: {
    level: process.env['LOG_LEVEL'] ?? 'info',
  },
};

export default config;
