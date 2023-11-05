import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import config from '../config';
import { User } from '../user/dto/user.entity';
import { BusinessCard } from '../businessCard/dto/businessCard.entity';
import { join } from 'path';
import { Email } from '../email/dto/Email.entity';

const connectionOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  entities: [User, BusinessCard, Email],
  migrations: [join(__dirname, '../__migrations__/*.{ts,js}')],
  synchronize: false,
};

const dataSource: DataSource = new DataSource(connectionOptions);

export default dataSource;
