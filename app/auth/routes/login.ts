import express, { Express, Request, Response } from 'express';
import errorHandlerMiddleware from '../../middlewares/errorHandler.middleware';
import validateInputMiddleware from '../../middlewares/validateInput.middleware';
import login from '../controllers/login.controller';
import { loginSchema } from '../dto/login.dto';

const app: Express = express();

const path = '/login';

app.post(
  path,
  validateInputMiddleware(loginSchema, 'body'),
  (req: Request, res: Response) => {
    errorHandlerMiddleware(async () => {
      return res.send(await login(req.body));
    }, res).then(() => {}, () => {});
  },
);

export default app;
