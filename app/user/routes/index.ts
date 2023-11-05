import express, { Express } from 'express';
import update from './update';

const app: Express = express();

app.use('/user', update);

export default app;
