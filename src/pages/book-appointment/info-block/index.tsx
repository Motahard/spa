import React from 'react';
import { InputComponent } from '@/components/input';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
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
          fontFamily={cormorantLight.className}
        />
        <InputComponent
          type="text"
          placeholder="Last Name"
          fontFamily={cormorantLight.className}
        />
        <InputComponent
          type="email"
          placeholder="Email"
          fontFamily={cormorantLight.className}
        />
        <InputComponent
          type="tel"
          placeholder="Phone number"
          fontFamily={cormorantLight.className}
        />
      </InfoContainer>
    </Container>
  );
}
