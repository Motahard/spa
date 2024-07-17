import React, { useReducer } from 'react';
import { ValidationError } from 'yup';

import {
  additionalInfoConfig,
  emailConfig,
  firstNameConfig,
  lastNameConfig,
  phoneNumberConfig,
} from './utils';

import { Breaker } from '@/components/breaker';
import Button from '@/components/button';
import { InputComponent } from '@/components/input';
import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { cormorant } from '@/constants';
import { CONTACT_MESSAGE, FROM_NAME } from '@/constants/email';
import { schema } from '@/constants/validation';
import { useSendEmail } from '@/hooks/use-send-email';
import {
  contactReducer,
  initialState,
  State,
} from '@/pages/contact/reducers/form-reducer';
import {
  Container,
  EmailText,
  FormContainer,
  InputContainer,
} from '@/pages/contact/styles';

function AboutPage() {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const { sendEmail, loading } = useSendEmail();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(
        {
          firstName: state.firstName.value,
          lastName: state.lastName.value,
          phone: state.phone.value,
          email: state.email.value,
        },
        { abortEarly: false }
      );

      const params = {
        from_name: FROM_NAME,
        recipient: state.email.value,
        message: CONTACT_MESSAGE,
        name: `${state.firstName.value} ${state.lastName.value}`,
      };

      await sendEmail(params);

      dispatch({
        type: 'RESET_FORM',
        field: '',
        payload: {
          value: '',
        },
      });
    } catch (err) {
      const errValidate = err as ValidationError;

      for (const { path, message } of errValidate.inner) {
        if (path && message) {
          dispatch({
            type: 'SET_ERROR',
            field: path,
            payload: {
              value: state[path as keyof State].value,
              error: message,
            },
          });
        }
      }
    }
  };

  const handleChange = async (value: string, name: string) => {
    dispatch({
      type: 'CHANGE',
      field: name,
      payload: {
        value: value,
      },
    });
  };

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    dispatch({
      type: 'CLEAR_ERROR',
      field: e.target.name,
      payload: {
        value: state[e.target.name as keyof State].value,
      },
    });
  };

  return (
    <Container>
      <Title top={48} fontFamily={cormorant.className} size={70}>
        Contact
      </Title>
      <Breaker />
      <Paragraph
        fontFamily={cormorant.className}
        size={24}
        style={{ textAlign: 'center' }}
      >
        For customer service inquiries, please email us at
        <EmailText> customerservice@luxeanimalspa.ca.</EmailText> For spa
        inquiries, please include your animal’s name for faster service. For
        your protection, please do not include your credit card or banking
        information details in your email.
      </Paragraph>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <InputComponent
            {...firstNameConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.firstName.value}
            error={state.firstName.error}
          />
          <InputComponent
            {...lastNameConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.lastName.value}
            error={state.lastName.error}
          />
        </InputContainer>
        <InputContainer>
          <InputComponent
            {...emailConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.email.value}
            error={state.email.error}
          />
          <InputComponent
            {...phoneNumberConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.phone.value}
            error={state.phone.error}
          />
        </InputContainer>
        <InputContainer>
          <InputComponent
            {...additionalInfoConfig}
            onChange={handleChange}
            value={state.additionalInfo.value}
          />
        </InputContainer>
        <Button type='submit' text='Submit' loading={loading} />
      </FormContainer>
    </Container>
  );
}

export default AboutPage;
