import Joi from 'joi';

export interface RegisterParams {
  email: string
  password: string
}

export interface RegisterResponse {
  token: string
}

export const registerSchema = Joi.object<RegisterParams>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).required();
