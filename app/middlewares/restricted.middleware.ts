import { Request, Response, NextFunction } from 'express';
import { errorsBuilders } from '../helpers/errors/CustomError.helper';
import loggerHelper from '../helpers/logger.helper';
import verify from '../auth/controllers/verify.controller';

export const restrictedMiddlewareLogic = async (authorization: string | undefined): Promise<any> => {
  if (authorization === undefined) {
    throw errorsBuilders.user.unauthorized();
  }

  const user = await verify({ authorization });

  if (!user) {
    throw errorsBuilders.user.unauthorized();
  }

  return user;
};

const restrictedMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | unknown> => {
  try {
    res.locals.user = await restrictedMiddlewareLogic(req.headers.authorization);
  } catch (e: any) {
    loggerHelper.error(`${req.method} | ${req.url} | ${e.message as string} | ${JSON.stringify(req.body)}`);
    const error = errorsBuilders.user.unauthorized();
    return res.status(error.statusCode).send({ message: error.key, type: 'restricted' });
  }

  next();
};

export default restrictedMiddleware;
