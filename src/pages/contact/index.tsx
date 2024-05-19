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

function AboutPage() {
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
      <FormContainer>
        <InputContainer>
          <InputComponent
            placeholder="First Name"
            size={18}
            fontFamily={cormorant.className}
          />
          <InputComponent
            placeholder="Last Name"
            size={18}
            fontFamily={cormorant.className}
          />
        </InputContainer>
        <InputContainer>
          <InputComponent
            placeholder="Email"
            size={18}
            fontFamily={cormorant.className}
          />
          <InputComponent
            placeholder="Phone number"
            size={18}
            fontFamily={cormorant.className}
          />
        </InputContainer>
        <InputContainer>
          <InputComponent
            type="textarea"
            placeholder="Your message goes here ..."
            size={18}
            fontFamily={cormorant.className}
          />
        </InputContainer>
        <Button type="submit" text="Submit" />
      </FormContainer>
    </Container>
  );
}

export default AboutPage;
