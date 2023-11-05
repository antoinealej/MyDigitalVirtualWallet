import { HTTP_STATUS } from '../http/HTTPStatus';

export enum ErrorKey {
  GLOBALS__VALIDATION_ERROR = 'globals.validationError',
  GLOBALS__BAD_REQUEST = 'globals.badRequest',
  GLOBALS__SERVER_ERROR = 'globals.serverError',
  GLOBALS__NOT_FOUND = 'globals.notFound',
  USER__NOT_FOUND = 'user.notFound',
  USER__ALREADY_EXIST = 'user.alreadyExist',
  USER__UNAUTHORIZED = 'user.unauthorized',
  USER__WRONG_AUTHENTICATION = 'user.wrongAuthentication',
}

export class CustomError extends Error {
  constructor (public key: ErrorKey, public statusCode = HTTP_STATUS.BAD_REQUEST, message?: string) {
    super(message);
  }
}
