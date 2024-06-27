import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const emailSchema = yup
  .string()
  .email('Email is not correct')
  .required('Enter your email');

export const firstName = yup
  .string()
  .min(2, 'Min length 2 characters')
  .max(25, 'Max length 25 characters')
  .required('Enter your firstname');

export const lastName = yup
  .string()
  .min(2, 'Min length 2 characters')
  .max(25, 'Max length 25 characters')
  .required('Enter your lastname');

export const phoneSchema = yup
  .string()
  .matches(phoneRegExp, 'Phone number is not correct')
  .required('Enter your phone');

export const schema = yup.object().shape({
  email: emailSchema,
  firstName: firstName,
  lastName: lastName,
  phone: phoneSchema,
});
