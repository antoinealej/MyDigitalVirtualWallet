import express, { Express, Request, Response } from 'express';
import errorHandlerMiddleware from '../../middlewares/errorHandler.middleware';
import validateInputMiddleware from '../../middlewares/validateInput.middleware';
import register from '../controllers/register.controller';
import { registerSchema } from '../dto/register.dto';

const app: Express = express();

const path = '/register';

app.post(
  path,
  validateInputMiddleware(registerSchema, 'body'),
  (req: Request, res: Response) => {
    errorHandlerMiddleware(async () => {
      return res.send(await register(req.body));
    }, res).then(() => {}, () => {});
  },
);

export default app;
