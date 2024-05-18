import React from 'react';

import Title from '@/components/title';
import { InputComponent } from '@/components/input';

import {
  BookContainer,
  BookTitleImageWrapper,
  BookTitleWrapper,
  Container,
  FormContainer,
  CommentContainer,
} from '@/pages/book-appointment/styles';
import { InfoBlock } from '@/pages/book-appointment/info-block';
import { DateBlock } from '@/pages/book-appointment/date-block';
import { MapBlock } from '@/pages/book-appointment/map-block';
import { PaymentBlock } from '@/pages/book-appointment/payment-block';

import { cormorant, cormorantLight } from '@/constants';

function BookAppoinment() {
  return (
    <Container>
      <BookTitleImageWrapper>
        <BookTitleWrapper>
          <Title fontFamily={cormorant.className} size={70} color="#fff">
            Book An Appointment With Our Groom Specialist Today!
          </Title>
        </BookTitleWrapper>
      </BookTitleImageWrapper>
      <BookContainer>
        <FormContainer>
          <InfoBlock />
          <DateBlock />
          <CommentContainer>
            <InputComponent
              type="textarea"
              placeholder="Any special requests for your pet(s)..."
              fontFamily={cormorantLight.className}
            />
          </CommentContainer>
          <PaymentBlock />
        </FormContainer>
        <MapBlock />
      </BookContainer>
    </Container>
  );
}

export default BookAppoinment;
