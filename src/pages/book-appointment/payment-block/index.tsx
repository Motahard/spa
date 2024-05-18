import React from 'react';

import {
  Container,
  FormContainer,
  InputContainer,
  PaymentSystems,
  PaymentSystemItem,
  PaymentInfo,
  SubmitContainer,
} from '@/pages/book-appointment/payment-block/styles';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import { InputComponent } from '@/components/input';
import { paymentSystemsConfig } from '@/constants/payments-systems';
import Image from 'next/image';
import Paragraph from '@/components/paragraph';
import Button from '@/components/button';

export const PaymentBlock = () => {
  return (
    <Container>
      <Title size={28} fontFamily={cormorant.className}>
        Enter your payment information
      </Title>
      <FormContainer>
        <InputComponent
          placeholder="Credit Card Number"
          fontFamily={cormorantLight.className}
          size={24}
        />
        <InputContainer>
          <InputComponent
            placeholder="Expiry Date"
            fontFamily={cormorantLight.className}
            size={24}
          />
          <InputComponent
            placeholder="CVV"
            fontFamily={cormorantLight.className}
            size={24}
          />
        </InputContainer>
        <InputComponent
          placeholder="Name on Card"
          fontFamily={cormorantLight.className}
          size={24}
        />
        <PaymentSystems>
          {paymentSystemsConfig.map((item) => (
            <PaymentSystemItem key={item.alt}>
              <Image src={item.icon} alt={item.alt} />
            </PaymentSystemItem>
          ))}
        </PaymentSystems>
        <SubmitContainer>
          <PaymentInfo>
            <Paragraph fontFamily={cormorantLight.className} size={18}>
              Please be advised cancelling within 24 hours of your scheduled
              appointment will result in a cancellation fee of $300.00.
            </Paragraph>
          </PaymentInfo>
          <Button text="Book Appointment" />
        </SubmitContainer>
      </FormContainer>
    </Container>
  );
};
