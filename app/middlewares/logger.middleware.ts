import { Request, Response, NextFunction } from 'express';
import loggerHelper from '../helpers/logger.helper';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  loggerHelper.info(`${req.method} | ${req.url} | ${JSON.stringify(req.body)}`);
  next();
};

export default loggerMiddleware;
