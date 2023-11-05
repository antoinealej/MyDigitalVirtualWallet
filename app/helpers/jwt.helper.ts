import jwt from 'jsonwebtoken';
import config from '../config';

interface tokenModel {
  user: {
    id: string
    email: string
  }
}

export const jwtHelper = {
  tokenConstruct (data: tokenModel) {
    return jwt.sign(data, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
  },

  tokenVerify (token: string) {
    return jwt.verify(token, config.jwt.secret);
  },

  tokenDecode (token: string) {
    return jwt.decode(token) as tokenModel;
  },
};
