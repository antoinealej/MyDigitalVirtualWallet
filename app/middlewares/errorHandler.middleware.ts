import { Response } from 'express';
import { CustomError } from '../helpers/errors/CustomError';

const errorHandlerMiddleware = async (func: () => any, res: Response, type?: string): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    await func();
  } catch (e) {
    let message;
    if (e instanceof CustomError) {
      return res.status(e.statusCode).send({ message: e.key, type });
    } else if (e instanceof Error) {
      message = e.message;
    } else {
      message = 'unknown Error';
    }
    return res.status(500).send({ message, type });
  }
};

export default errorHandlerMiddleware;
