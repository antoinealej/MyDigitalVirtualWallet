import Joi from 'joi';
import { User } from './user.entity';

export type UpdateParams = Pick<User, 'firstName' | 'lastName' | 'phone'>;

export type UpdateResponse = UpdateParams;

export const updateSchema = Joi.object<UpdateParams>({
  firstName: Joi.string(),
  lastName: Joi.string(),
  phone: Joi.string(),
}).required();
