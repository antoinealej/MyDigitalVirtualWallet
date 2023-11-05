import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

const validateInputMiddleware = (schema: Schema, param: string, type?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = schema.validate(req[param]);

    if (result.error != null) {
      return res.status(422).send({
        message: result.error.details.map((detail) => detail.message).join(', '),
        type,
      });
    }

    next();
  };
};

export default validateInputMiddleware;
