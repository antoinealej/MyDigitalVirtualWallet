import express, { Express } from 'express';
import login from './login';
import register from './register';

const app: Express = express();

app.use('/auth', register, login);

export default app;
