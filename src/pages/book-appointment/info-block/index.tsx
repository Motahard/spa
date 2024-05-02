import React from 'react';
import { InputComponent } from '@/components/input';
import Title from '@/components/title';
import { cormorant } from '@/constants';
import {
  InfoContainer,
  Container,
} from '@/pages/book-appointment/info-block/styles';

export function InfoBlock() {
  return (
    <Container>
      <Title fontFamily={cormorant.className} size={40}>
        Enter your information here
      </Title>
      <InfoContainer>
        <InputComponent
          type="text"
          placeholder="First Name"
          fontFamily={cormorant.className}
        />
        <InputComponent
          type="text"
          placeholder="Last Name"
          fontFamily={cormorant.className}
        />
        <InputComponent
          type="email"
          placeholder="Email"
          fontFamily={cormorant.className}
        />
        <InputComponent
          type="tel"
          placeholder="Phone number"
          fontFamily={cormorant.className}
        />
      </InfoContainer>
    </Container>
  );
}
