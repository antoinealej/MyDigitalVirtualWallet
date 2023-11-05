import { errorsBuilders } from '../../helpers/errors/CustomError.helper';
import { jwtHelper } from '../../helpers/jwt.helper';
import { hashHelper } from '../../helpers/hash.helper';
import { LoginParams, LoginResponse } from '../dto/login.dto';
import { userRepository } from '../../database/database.service';

const login = async (user: LoginParams): Promise<LoginResponse> => {
  const dbUser = await userRepository.findOne({ where: { email: user.email } });

  if (dbUser == null || dbUser.id == null) {
    throw errorsBuilders.user.wrongAuthentication();
  }

  const compare = await hashHelper.compare(user.password, dbUser.password);
  if (!compare) {
    throw errorsBuilders.user.wrongAuthentication();
  }

  const token = jwtHelper.tokenConstruct({
    user: {
      id: dbUser.id,
      email: dbUser.email,
    },
  });

  return { token };
};

export default login;
