import 'reflect-metadata';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import auth from './auth/routes';
import user from './user/routes';
import email from './email/routes';
import config from './config';
import loggerMiddleware from './middlewares/logger.middleware';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use('/', auth, user, email);

app.listen(config.port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${config.port}`);
});
