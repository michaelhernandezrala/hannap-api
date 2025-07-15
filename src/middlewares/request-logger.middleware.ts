import logger from '@/utils/logger';
import type { NextFunction, Request, Response } from 'express';

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const startTime = Date.now();
  const requestId = Math.random().toString(36).substring(7);

  logger.info({
    message: `[REQUEST] ${requestId} ${req.method} ${req.url}`,
    id: requestId,
    method: req.method,
    url: req.url,
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    timestamp: new Date().toISOString(),
  });

  const originalSend = res.send;
  res.send = function <T>(body: T): Response<T> {
    const endTime = Date.now();
    const duration = endTime - startTime;

    logger.info({
      message: `[RESPONSE] ${requestId} ${res.statusCode} ${req.method} ${req.url}`,
      id: requestId,
      statusCode: res.statusCode,
      body: body,
      duration: `${duration}ms`,
      timestamp: new Date().toISOString(),
    });

    return originalSend.call(this, body);
  };

  next();
};

export default requestLogger;
