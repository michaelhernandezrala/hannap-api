import app from '@/app';
import config from './config/config';
import logger from './utils/logger';

const PORT = config.port;

app.listen(PORT, () => {
  logger.info({ message: 'Server started successfully', port: PORT });
});
