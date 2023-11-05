import Joi from 'joi';
import { EmailTemplate, emailTemplateSchema } from './emailTemplate.dto';

export interface SendParams {
  template: EmailTemplate
}

export type UpdateResponse = SendParams;

export const sendSchema = Joi.object<SendParams>({
  template: emailTemplateSchema.required(),
}).required();
