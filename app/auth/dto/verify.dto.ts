import Joi from 'joi';

export interface VerifyParams {
  authorization?: string
}

export interface VerifyResponse {
  id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  profilePicture?: string
}

export const verifySchema = Joi.object<VerifyParams>({
  authorization: Joi.string().required(),
}).unknown(true).required();
