import { Email } from '../email/dto/email.entity';
import { User } from '../user/dto/user.entity';
import dataSource from './datasource';

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export const userRepository = dataSource.getRepository(User);
export const emailRepository = dataSource.getRepository(Email);

export default dataSource;
