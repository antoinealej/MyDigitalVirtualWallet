import { userRepository } from '../../database/database.service';
import { UpdateParams, UpdateResponse } from '../dto/update.dto';
import { User } from '../dto/user.entity';

const update = async (user: UpdateParams, verifiedUser: User): Promise<UpdateResponse> => {
  await userRepository.update(verifiedUser.id, user);

  return user;
};

export default update;
