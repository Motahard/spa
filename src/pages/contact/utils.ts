import { cormorant } from '@/constants';
import { schema } from '@/constants/validation';

export const firstNameConfig = {
  placeholder: 'First Name',
  size: 18,
  fontFamily: cormorant.className,
  validation: schema,
  schemaName: 'firstName',
};

export const lastNameConfig = {
  placeholder: 'Last Name',
  size: 18,
  fontFamily: cormorant.className,
  validation: schema,
  schemaName: 'lastName',
};

export const emailConfig = {
  placeholder: 'Email',
  size: 18,
  fontFamily: cormorant.className,
  validation: schema,
  schemaName: 'email',
};

export const phoneNumberConfig = {
  placeholder: 'Phone number',
  size: 18,
  fontFamily: cormorant.className,
  validation: schema,
  schemaName: 'phone',
};

export const additionalInfoConfig = {
  type: 'textarea',
  placeholder: 'Your message goes here ...',
  size: 18,
  fontFamily: cormorant.className,
};
