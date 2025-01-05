import React, { useReducer } from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { ValidationError } from 'yup';

import { Breaker } from '@/app/components/breaker';
import Button from '@/app/components/button';
import { InputComponent } from '@/app/components/input';
import Paragraph from '@/app/components/paragraph';
import Title from '@/app/components/title';
import { cormorant } from '@/app/constants';
import { CONTACT_MESSAGE, FROM_NAME } from '@/app/constants/email';
import { schema } from '@/app/constants/validation';
import {
  additionalInfoConfig,
  emailConfig,
  firstNameConfig,
  lastNameConfig,
  phoneNumberConfig,
} from '../../app/helpers/contact.config';
import { useSendEmail } from '../../app/hooks/use-send-email';
import {
  clearContactError,
  resetConctactForm,
  setContactError,
  setContactValue,
} from '@/app/reducers/contact/contact-actions';
import { contactReducer } from '@/app/reducers/contact/contact-reducer';
import { initialContactState } from '@/app/reducers/contact/initState';
import {
  Container,
  EmailText,
  FormContainer,
  InputContainer,
} from '../../app/styles/contact.styles';

const AboutPage = () => {
  const t = useTranslations('CONTACT');
  const [state, dispatch] = useReducer(contactReducer, initialContactState);
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

      dispatch(resetConctactForm());
    } catch (err) {
      const errValidate = err as ValidationError;

      for (const { path, message } of errValidate.inner) {
        if (path && message) {
          dispatch(setContactError(path, state, message));
        }
      }
    }
  };

  const handleChange = async (value: string, name: string) => {
    dispatch(setContactValue(name, value));
  };

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    dispatch(clearContactError(e.target.name, state));
  };

  return (
    <Container>
      <Title top={48} fontFamily={cormorant.className} size={70}>
        {t('title')}
      </Title>
      <Breaker />
      <Paragraph
        fontFamily={cormorant.className}
        size={24}
        style={{ textAlign: 'center' }}
      >
        {t('desciprition_1')}
        <EmailText> {t('email')}</EmailText>
        {t('desciprition_2')}
      </Paragraph>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <InputComponent
            {...firstNameConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.firstName.value}
            error={state.firstName.error}
            placeholder={t('placeholder_1')}
          />
          <InputComponent
            {...lastNameConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.lastName.value}
            error={state.lastName.error}
            placeholder={t('placeholder_2')}
          />
        </InputContainer>
        <InputContainer>
          <InputComponent
            {...emailConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.email.value}
            error={state.email.error}
            placeholder={t('placeholder_3')}
          />
          <InputComponent
            {...phoneNumberConfig}
            onChange={handleChange}
            onFocus={handleFocus}
            value={state.phone.value}
            error={state.phone.error}
            placeholder={t('placeholder_4')}
          />
        </InputContainer>
        <InputContainer>
          <InputComponent
            {...additionalInfoConfig}
            onChange={handleChange}
            value={state.additionalInfo.value}
            placeholder={t('placeholder_5')}
          />
        </InputContainer>
        <Button type='submit' text={t('button')} loading={loading} />
      </FormContainer>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default AboutPage;
