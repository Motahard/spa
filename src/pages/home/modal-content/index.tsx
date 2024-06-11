import React from 'react';
import Image from 'next/image';

import {
  Container,
  DesciptionWrapper,
  ImageWrapper,
  FormWrapper,
  ButtonWrapper,
} from '@/pages/home/modal-content/styles';

import modalImage from '@/assets/content/modal-image.jpg';
import Title from '@/components/title';
import Paragraph from '@/components/paragraph';
import { InputComponent } from '@/components/input';
import Button from '@/components/button';
import { cinzel_decorative, cormorantLight } from '@/constants';

export const ModalContent = () => {
  return (
    <Container>
      <DesciptionWrapper>
        <Title fontFamily={cinzel_decorative.className} size={40} bottom={16}>
          Sign Up to Bark Newsletter
        </Title>
        <Paragraph fontFamily={cormorantLight.className} size={24}>
          Get 10% Off Your First Spa Treatment{' '}
        </Paragraph>
        <FormWrapper>
          <InputComponent
            type="email"
            placeholder="Email"
            fontFamily={cormorantLight.className}
            size={18}
          />
          <ButtonWrapper>
            <Button text="Sign Up" type="submit" />
          </ButtonWrapper>
        </FormWrapper>
        <Paragraph
          fontFamily={cormorantLight.className}
          size={14}
          textAlign="center"
        >
          *By completing this form you are signing up to receive our emails and
          can unsubscribe at any time.
        </Paragraph>
      </DesciptionWrapper>
      <ImageWrapper>
        <Image src={modalImage} alt="modal" />
      </ImageWrapper>
    </Container>
  );
};
