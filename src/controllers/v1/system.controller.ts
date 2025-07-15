import type { Request, Response } from 'express';

import responseHelper from '@/utils/response-helper';

export const getHealth = async (_req: Request, res: Response) => {
  responseHelper.ok(res);
};
