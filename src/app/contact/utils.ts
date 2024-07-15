import { cormorant } from '@/constants';

export const firstNameConfig = {
  placeholder: 'First Name',
  size: 18,
  fontFamily: cormorant.className,
  name: 'firstName',
};

export const lastNameConfig = {
  placeholder: 'Last Name',
  size: 18,
  fontFamily: cormorant.className,
  name: 'lastName',
};

export const emailConfig = {
  placeholder: 'Email',
  size: 18,
  fontFamily: cormorant.className,
  name: 'email',
};

export const phoneNumberConfig = {
  placeholder: 'Phone number',
  size: 18,
  fontFamily: cormorant.className,
  name: 'phone',
};

export const additionalInfoConfig = {
  type: 'textarea',
  placeholder: 'Your message goes here ...',
  size: 18,
  fontFamily: cormorant.className,
  name: 'additionalInfo',
};
