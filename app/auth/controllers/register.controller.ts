import { hashHelper } from '../../helpers/hash.helper';
import { errorsBuilders } from '../../helpers/errors/CustomError.helper';
import { jwtHelper } from '../../helpers/jwt.helper';
import { RegisterParams, RegisterResponse } from '../dto/register.dto';
import { userRepository } from '../../database/database.service';

const register = async (user: RegisterParams): Promise<RegisterResponse> => {
  const checkDbUser = await userRepository.findOne({ where: { email: user.email } });

  if (checkDbUser != null) {
    throw errorsBuilders.user.alreadyExist();
  }

  const insertResult = await userRepository.insert({
    email: user.email,
    password: await hashHelper.hash(user.password),
  });

  const token = jwtHelper.tokenConstruct({
    user: {
      id: insertResult.identifiers[0].id,
      email: user.email,
    },
  });

  return { token };
};

export default register;
