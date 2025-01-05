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

import { createOrder } from '../../app/api/create-order';
import Button from '@/app/components/button';
import DateBlock from '@/app/components/date-block';
import InfoBlock from '@/app/components/info-block';
import { InputComponent } from '@/app/components/input';
import MapBlock from '@/app/components/map-block';
import { Modal } from '@/app/components/modal';
import PaymentBlock from '@/app/components/payment-block';
import Title from '@/app/components/title';
import { cormorant, cormorantLight } from '@/app/constants';
import { envVariables } from '@/app/constants/environment';
import { schema, schemaPay } from '@/app/constants/validation';
import { resetInfoForm, setInfoError } from '@/app/reducers/info/info-actions';
import { infoReducer } from '@/app/reducers/info/info-reducer';
import { initialInfoState } from '@/app/reducers/info/initialState';
import {
  BookContainer,
  BookTitleImageWrapper,
  BookTitleWrapper,
  CommentContainer,
  Container,
  FormContainer,
  PaypalContainer,
} from '@/app/styles/book.styles';

const BookAppoinment = () => {
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
          dispatch(setInfoError(path, state, message));
        }
      }
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSuccess: PayPalButtonsComponentProps['onApprove'] = async () => {
    dispatch(resetInfoForm());

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
              size={18}
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
                  options={{
                    clientId: envVariables.PAYPAL_CLIENT_ID as string,
                  }}
                >
                  <PayPalButtons
                    style={{ height: 55, layout: 'vertical', color: 'silver' }}
                    createOrder={createOrder}
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
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default BookAppoinment;
