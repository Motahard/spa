import React, { useReducer, useRef, useState } from 'react';
import { CalendarProps } from 'react-calendar';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { ValidationError } from 'yup';

import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  PayPalScriptProvider,
} from '@paypal/react-paypal-js';

import { InfoState } from '../../reducers/info-reducer';

import Button from '@/components/button';
import DateBlock from '@/components/date-block';
import InfoBlock from '@/components/info-block';
import { InputComponent } from '@/components/input';
import MapBlock from '@/components/map-block';
import { Modal } from '@/components/modal';
import PaymentBlock from '@/components/payment-block';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import { schema, schemaPay } from '@/constants/validation';
import { infoReducer, initialInfoState } from '@/reducers/info-reducer';
import {
  BookContainer,
  BookTitleImageWrapper,
  BookTitleWrapper,
  CommentContainer,
  Container,
  FormContainer,
  PaypalContainer,
} from '@/styles/book.styles';

function BookAppoinment() {
  const t = useTranslations('BOOK');
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
      await validationSchema.validate(
        {
          firstName: state.firstName.value,
          lastName: state.lastName.value,
          phone: state.phone.value,
          email: state.email.value,
          card: trimmedCard,
          expiry: state.expiry.value,
          cvv: state.cvv.value,
          name: state.name.value,
        },
        { abortEarly: false }
      );
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

  const handlePayment: PayPalButtonsComponentProps['createOrder'] =
    async () => {
      const res = await fetch('/api/paypal/', {
        method: 'POST',
      });

      const order = await res.json();
      return order.id;
    };

  const handleSuccess: PayPalButtonsComponentProps['onApprove'] = async () => {
    dispatch({
      type: 'RESET_FORM',
      field: '',
      payload: {
        value: '',
      },
    });

    handleModalClose();
  };

  const handleCancel: PayPalButtonsComponentProps['onCancel'] = async () => {
    handleModalClose();
  };

  return (
    <Container>
      <BookTitleImageWrapper>
        <BookTitleWrapper>
          <Title fontFamily={cormorant.className} size={64} color='#fff'>
            {t('title')}
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
              type='textarea'
              placeholder={t('additional_placholder')}
              fontFamily={cormorantLight.className}
              value={additionalInfo}
              onChange={setAdditionalInfo}
            />
            <PaymentBlock state={state} dispatch={dispatch} />
            <Button text={t('submit_button')} type='submit' />
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default BookAppoinment;
