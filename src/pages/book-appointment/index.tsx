import React, { useReducer, useRef, useState } from 'react';
import { CalendarProps } from 'react-calendar';

import Title from '@/components/title';
import { InputComponent } from '@/components/input';

import {
  BookContainer,
  BookTitleImageWrapper,
  BookTitleWrapper,
  Container,
  FormContainer,
  CommentContainer,
  PaypalContainer,
} from '@/pages/book-appointment/styles';
import InfoBlock from '@/pages/book-appointment/info-block';
import { DateBlock } from '@/pages/book-appointment/date-block';
import { MapBlock } from '@/pages/book-appointment/map-block';
import { PaymentBlock } from '@/pages/book-appointment/payment-block';

import { cormorant, cormorantLight } from '@/constants';
import {
  infoReducer,
  initialInfoState,
} from '@/pages/book-appointment/reducers/info-reducer';
import { schema, schemaPay } from '@/constants/validation';
import { ValidationError } from 'yup';
import { InfoState } from './reducers/info-reducer';
import { Modal } from '@/components/modal';
import Button from '@/components/button';
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  PayPalScriptProvider,
} from '@paypal/react-paypal-js';

function BookAppoinment() {
  const [modalOpen, setModalOpen] = useState(false);
  const [time, setTime] = useState<string>('1');
  const [date, setDate] = useState<CalendarProps['value']>(new Date());
  const infoBlockRef = useRef<HTMLDivElement>(null);
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [state, dispatch] = useReducer(infoReducer, initialInfoState);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const trimmedCard = state.card.value.replace(/ /g, '');

    const validationSchema = schema.concat(schemaPay);

    try {
      // await validationSchema.validate(
      //   {
      //     firstName: state.firstName.value,
      //     lastName: state.lastName.value,
      //     phone: state.phone.value,
      //     email: state.email.value,
      //     card: trimmedCard,
      //     expiry: state.expiry.value,
      //     cvv: state.cvv.value,
      //     name: state.name.value,
      //   },
      //   { abortEarly: false }
      // );
      setModalOpen(true);
    } catch (err) {
      const errValidate = err as ValidationError;

      if (infoBlockRef.current) {
        infoBlockRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      for (const { path, message } of errValidate.inner) {
        if (path && message) {
          dispatch({
            type: 'SET_ERROR',
            field: path,
            payload: {
              value: state[path as keyof InfoState].value,
              error: message,
            },
          });
        }
      }
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePayment: PayPalButtonsComponentProps['createOrder'] = async (
    _data,
    _actions
  ) => {
    const res = await fetch('/api/paypal/', {
      method: 'POST',
    });

    const order = await res.json();
    return order.id;
  };

  const handleSuccess: PayPalButtonsComponentProps['onApprove'] = async (
    _data,
    _actions
  ) => {
    handleModalClose();
  };

  const handleCancel: PayPalButtonsComponentProps['onCancel'] = async (
    _data,
    _actions
  ) => {
    handleModalClose();
  };

  return (
    <Container>
      <BookTitleImageWrapper>
        <BookTitleWrapper>
          <Title fontFamily={cormorant.className} size={64} color="#fff">
            Book An Appointment With Our Groom Specialist Today!
          </Title>
        </BookTitleWrapper>
      </BookTitleImageWrapper>
      <BookContainer>
        <FormContainer onSubmit={handleSubmit}>
          <InfoBlock state={state} dispatch={dispatch} ref={infoBlockRef} />
          <DateBlock
            time={time}
            date={date}
            setTime={setTime}
            setDate={setDate}
          />
          <CommentContainer>
            <InputComponent
              type="textarea"
              placeholder="Any special requests for your pet(s)..."
              fontFamily={cormorantLight.className}
              value={additionalInfo}
              onChange={setAdditionalInfo}
            />
            <PaymentBlock state={state} dispatch={dispatch} />
            <Button text="Book Appointment" type="submit" />
          </CommentContainer>
          {modalOpen && (
            <Modal onClose={handleModalClose}>
              <PaypalContainer>
                <PayPalScriptProvider
                  options={{ clientId: process.env.PAYPAL_CLIENT_ID as string }}
                >
                  <PayPalButtons
                    style={{ height: 55, layout: 'vertical', color: 'silver' }}
                    createOrder={handlePayment}
                    onApprove={handleSuccess}
                    onCancel={handleCancel}
                  />
                </PayPalScriptProvider>
              </PaypalContainer>
            </Modal>
          )}
        </FormContainer>
        <MapBlock />
      </BookContainer>
    </Container>
  );
}

export default BookAppoinment;
