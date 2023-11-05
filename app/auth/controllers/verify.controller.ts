import { userRepository } from '../../database/database.service';
import { errorsBuilders } from '../../helpers/errors/CustomError.helper';
import { jwtHelper } from '../../helpers/jwt.helper';
import { VerifyParams, VerifyResponse } from '../dto/verify.dto';

const verify = async ({ authorization }: VerifyParams): Promise<VerifyResponse> => {
  if (authorization === undefined || authorization === '') {
    throw errorsBuilders.user.unauthorized();
  }

  try {
    jwtHelper.tokenVerify(authorization);
  } catch {
    throw errorsBuilders.user.unauthorized();
  }

  let token;
  try {
    token = jwtHelper.tokenDecode(authorization);
  } catch {
    throw errorsBuilders.user.unauthorized();
  }

  const dbUser = await userRepository.findOne({ where: { id: token.user.id } });

  if (dbUser === null) {
    throw errorsBuilders.user.unauthorized();
  }

  return {
    id: token.user.id,
    email: dbUser.email,
    firstName: dbUser.firstName,
    lastName: dbUser.lastName,
    phone: dbUser.phone,
    profilePicture: dbUser.profilePicture,
  };
};

export default verify;
