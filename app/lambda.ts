import express, { Express } from 'express';
import bodyParser from 'body-parser';
import serverless from 'serverless-http';
import cors from 'cors';
import auth from './auth/routes';
import loggerMiddleware from './middlewares/logger.middleware';

const app: Express = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use('/', auth);

export const handler = serverless(app);
