import express, { Express, Request, Response } from 'express';
import errorHandlerMiddleware from '../../middlewares/errorHandler.middleware';
import validateInputMiddleware from '../../middlewares/validateInput.middleware';
import restrictedMiddleware from '../../middlewares/restricted.middleware';
import send from '../controllers/send.controller';
import { User } from '../../user/dto/user.entity';
import { sendSchema } from '../dto/send.dto';

const app: Express = express();

const path = '/';

app.patch(
  path,
  restrictedMiddleware,
  validateInputMiddleware(sendSchema, 'body'),
  (req: Request, res: Response) => {
    errorHandlerMiddleware(async () => {
      return res.send(await send(req.body, res.locals as User));
    }, res).then(() => {}, () => {});
  },
);

export default app;
