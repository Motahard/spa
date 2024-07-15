import React from 'react';

import {
  Container,
  FormContainer,
  InputContainer,
  PaymentSystems,
  PaymentSystemItem,
  PaymentInfo,
  SubmitContainer,
} from '@/app/book-appointment/payment-block/styles';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import { InputComponent } from '@/components/input';
import { paymentSystemsConfig } from '@/constants/payments-systems';
import Image from 'next/image';
import Paragraph from '@/components/paragraph';
import {
  InfoState,
  Action,
} from '@/app/book-appointment/reducers/info-reducer';

type Props = {
  state: InfoState;
  dispatch: React.Dispatch<Action>;
};

export const PaymentBlock = ({ dispatch, state }: Props) => {
  const handleChange = (value: string, name: string) => {
    dispatch({
      type: 'CHANGE',
      field: name,
      payload: {
        value: value,
      },
    });
  };

  return (
    <Container>
      <Title size={28} fontFamily={cormorant.className}>
        Enter your payment information
      </Title>
      <FormContainer>
        <InputComponent
          placeholder="Credit Card Number"
          fontFamily={cormorantLight.className}
          name="card"
          size={24}
          onChange={handleChange}
          value={state.card.value}
          error={state.card.error}
          mask="9999 9999 9999 9999"
        />
        <InputContainer>
          <InputComponent
            placeholder="Expiry Date"
            fontFamily={cormorantLight.className}
            name="expiry"
            size={24}
            onChange={handleChange}
            value={state.expiry.value}
            error={state.expiry.error}
            mask="99/99"
          />
          <InputComponent
            type="password"
            placeholder="CVV"
            fontFamily={cormorantLight.className}
            size={24}
            name="cvv"
            onChange={handleChange}
            value={state.cvv.value}
            error={state.cvv.error}
            mask="999"
          />
        </InputContainer>
        <InputComponent
          placeholder="Name on Card"
          fontFamily={cormorantLight.className}
          name="name"
          size={24}
          onChange={handleChange}
          value={state.name.value}
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
        </SubmitContainer>
      </FormContainer>
    </Container>
  );
};
