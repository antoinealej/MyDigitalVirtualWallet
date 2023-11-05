import Joi from 'joi';
import { HTTP_STATUS } from '../http/HTTPStatus';
import { CustomError, ErrorKey } from './CustomError';

function createErrorBuilder (key: ErrorKey, statusCode = HTTP_STATUS.BAD_REQUEST, message?: string) {
  return (customMessage?: string) => new CustomError(key, statusCode, customMessage ?? message);
}

export const errorsBuilders = {
  globals: {
    notFound: createErrorBuilder(ErrorKey.GLOBALS__NOT_FOUND, HTTP_STATUS.NOT_FOUND),
    badRequest: createErrorBuilder(ErrorKey.GLOBALS__BAD_REQUEST, HTTP_STATUS.BAD_REQUEST),
    internal: createErrorBuilder(ErrorKey.GLOBALS__SERVER_ERROR, HTTP_STATUS.INTERNAL_SERVER_ERROR),
    validationError: createErrorBuilder(ErrorKey.GLOBALS__VALIDATION_ERROR, HTTP_STATUS.BAD_REQUEST),
  },
  user: {
    alreadyExist: createErrorBuilder(ErrorKey.USER__ALREADY_EXIST, HTTP_STATUS.CONFLICT),
    notFound: createErrorBuilder(ErrorKey.USER__NOT_FOUND, HTTP_STATUS.NOT_FOUND),
    unauthorized: createErrorBuilder(ErrorKey.USER__UNAUTHORIZED, HTTP_STATUS.UNAUTHORIZED),
    wrongAuthentication: createErrorBuilder(ErrorKey.USER__WRONG_AUTHENTICATION, HTTP_STATUS.UNAUTHORIZED),
  },
};

export const validationError = (result: Joi.ValidationResult): CustomError | undefined => {
  if (result.error != null) {
    return errorsBuilders.globals.validationError(result.error.details.map((detail) => detail.message).join(', '));
  }
};
