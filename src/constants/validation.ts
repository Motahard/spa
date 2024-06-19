import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const emailSchema = yup
  .string()
  .email('Email is not correct')

export const nameSchema = yup
  .string()
  .min(2, 'Min length 2 characters')
  .max(25, 'Max length 25 characters');

export const phoneSchema = yup
  .string()
  .matches(phoneRegExp, 'Phone number is not valid');

export const schema = yup.object().shape({
    email: emailSchema,
    firstName: nameSchema,
    lastName: nameSchema,
    phone: phoneSchema
})