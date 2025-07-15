import express from 'express';

import { openApiValidator, swaggerDocs } from '@/middlewares/openapi.middleware';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import rateLimiter from './middlewares/rate-limiter.middleware';
import requestLogger from './middlewares/request-logger.middleware';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(requestLogger);
app.use(rateLimiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/docs', swaggerDocs.serve, swaggerDocs.setup);
app.use(openApiValidator);

export default app;
