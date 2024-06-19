import React from 'react';
import {
  Container,
  EmailText,
  FormContainer,
  InputContainer,
} from '@/pages/contact/styles';
import Title from '@/components/title';
import { cormorant } from '@/constants';
import { Breaker } from '@/components/breaker';
import Paragraph from '@/components/paragraph';
import { InputComponent } from '@/components/input';
import Button from '@/components/button';
import { useInput } from '@/hooks/use-input';
import {
  firstNameConfig,
  lastNameConfig,
  emailConfig,
  phoneNumberConfig,
  additionalInfoConfig,
} from './utils';

function AboutPage() {
  const [firstName, FirstNameComponent] = useInput(firstNameConfig);
  const [lastName, LastNameComponent] = useInput(lastNameConfig);
  const [email, EmailComponent] = useInput(emailConfig);
  const [phoneNumber, PhoneNumberComponent] = useInput(phoneNumberConfig);
  const [additionalInfo, AdditionalInfoComponent] =
    useInput(additionalInfoConfig);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
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
          {FirstNameComponent}
          {LastNameComponent}
        </InputContainer>
        <InputContainer>
          {EmailComponent}
          {PhoneNumberComponent}
        </InputContainer>
        <InputContainer>{AdditionalInfoComponent}</InputContainer>
        <Button type="submit" text="Submit" />
      </FormContainer>
    </Container>
  );
}

export default AboutPage;
