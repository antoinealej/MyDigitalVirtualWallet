import Joi from 'joi';

export interface LoginParams {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
}

export const loginSchema = Joi.object<LoginParams>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).required();
