import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT ?? 3000,
  database: {
    host: process.env.POSTGRES_HOST ?? '',
    port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
    username: process.env.POSTGRES_USERNAME ?? '',
    password: process.env.POSTGRES_PASSWORD ?? '',
    database: process.env.POSTGRES_DATABASE ?? '',
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? '',
    expiresIn: process.env.JWT_EXPIRES ?? '24h',
  },
};

export default config;
