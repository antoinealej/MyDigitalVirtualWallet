import Joi from 'joi';

export enum EmailTemplate {
  OTP = 'OTP',
}

export const emailTemplateSchema = Joi.string<EmailTemplate>().valid(...Object.values(EmailTemplate));
