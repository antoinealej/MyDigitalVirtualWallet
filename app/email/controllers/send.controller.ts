import { errorsBuilders } from '../../helpers/errors/CustomError.helper';
import { emailRepository } from '../../database/database.service';
import { User } from '../../user/dto/user.entity';
import { SendParams } from '../dto/send.dto';
import { Email } from '../dto/email.entity';

const update = async (user: SendParams, verifiedUser: User): Promise<Response> => {
  const email = new Email();
  email.from = 'antoine.alejandro@gmail.com';

  await userRepository.update(dbUser.id, user);

  return user;
};

export default update;
