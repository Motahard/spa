import React, { useReducer } from 'react';

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
import { PaymentState, initialPaymentState, paymentReducer } from '@/pages/book-appointment/payment-block/reducers/payment-reducer';
import { schemaPay } from '@/constants/validation';
import { ValidationError } from 'yup';

export const PaymentBlock = () => {
  const [state, dispatch] = useReducer(paymentReducer, initialPaymentState);

  const handleChange = (value: string, name: string) => {
    dispatch({
      type: 'CHANGE',
      field: name,
      payload: {
        value: value,
      },
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await schemaPay.validate(
        {
          card: state.card.value,
          expiry: state.expiry.value,
          cvv: state.cvv.value,
          name: state.name.value,
        },
        { abortEarly: false }
      );
    } catch (err) {
      const errValidate = err as ValidationError;

      for (const { path, message } of errValidate.inner) {
        if (path && message) {
          dispatch({
            type: 'SET_ERROR',
            field: path,
            payload: {
              value: state[path as keyof PaymentState].value,
              error: message,
            },
          });
        }
      }
    }
  }

  return (
    <Container>
      <Title size={28} fontFamily={cormorant.className}>
        Enter your payment information
      </Title>
      <FormContainer onSubmit={handleSubmit}>
        <InputComponent
          placeholder="Credit Card Number (0000 0000 0000 0000)"
          fontFamily={cormorantLight.className}
          name='card'
          size={24}
          onChange={handleChange}
          value={state.card.value}
          error={state.card.error}
          mask='9999 9999 9999 999'
        />
        <InputContainer>
          <InputComponent
            placeholder="Expiry Date (mm/yy)"
            fontFamily={cormorantLight.className}
            name='expiry'
            size={24}
            onChange={handleChange}
            value={state.expiry.value}
            error={state.expiry.error}
            mask='99/99'
          />
          <InputComponent
            type='password'
            placeholder="CVV"
            fontFamily={cormorantLight.className}
            size={24}
            name='cvv'
            onChange={handleChange}
            value={state.cvv.value}
            error={state.cvv.error}
            mask='999'
          />
        </InputContainer>
        <InputComponent
          placeholder="Name on Card"
          fontFamily={cormorantLight.className}
          name='name'
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
          <Button text="Book Appointment" type='submit'/>
        </SubmitContainer>
      </FormContainer>
    </Container>
  );
};
