import express, { Express } from 'express';
import send from './send';

const app: Express = express();

app.use('/email', send);

export default app;
