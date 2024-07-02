import * as yup from 'yup';

const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const cardNumberRegEx =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

const emailSchema = yup
  .string()
  .matches(emailRegEx, 'Email is not correct')
  .required('Enter your email');

const firstName = yup
  .string()
  .min(2, 'Min length 2 characters')
  .max(25, 'Max length 25 characters')
  .required('Enter your firstname');

const lastName = yup
  .string()
  .min(2, 'Min length 2 characters')
  .max(25, 'Max length 25 characters')
  .required('Enter your lastname');

const phoneSchema = yup
  .string()
  .matches(phoneRegEx, 'Phone number is not correct')
  .required('Enter your phone');

export const schema = yup.object().shape({
  email: emailSchema,
  firstName: firstName,
  lastName: lastName,
  phone: phoneSchema,
});

const cardSchema = yup
  .string()
  .matches(cardNumberRegEx, 'Card number is not correct')
  .required('Enter your card number');

const expirySchema = yup
  .string()
  .min(5, 'Min length 5 characters')
  .max(5, 'Max length 5 characters')
  .required('Enter your expiry date of card');

const cvvShema = yup
  .string()
  .min(3, 'Min length 3 characters')
  .max(3, 'Max length 3 characters')
  .required('Enter your cvv');

const nameSchema = yup
  .string()
  .min(4, 'Min length 2 characters')
  .max(25, 'Max length 25 characters')
  .required('Enter your name');

export const schemaPay = yup.object().shape({
  card: cardSchema,
  expiry: expirySchema,
  cvv: cvvShema,
  name: nameSchema,
});
