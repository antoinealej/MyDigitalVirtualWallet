import express, { Express, Request, Response } from 'express';
import errorHandlerMiddleware from '../../middlewares/errorHandler.middleware';
import validateInputMiddleware from '../../middlewares/validateInput.middleware';
import { updateSchema } from '../dto/update.dto';
import update from '../controllers/update.controller';
import restrictedMiddleware from '../../middlewares/restricted.middleware';
import { User } from '../dto/user.entity';

const app: Express = express();

const path = '/';

app.patch(
  path,
  restrictedMiddleware,
  validateInputMiddleware(updateSchema, 'body'),
  (req: Request, res: Response) => {
    errorHandlerMiddleware(async () => {
      return res.send(await update(req.body, res.locals as User));
    }, res).then(() => {}, () => {});
  },
);

export default app;
