import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { InputComponent } from '@/components/input';
import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import { paymentSystemsConfig } from '@/constants/payments-systems';
import { Action, InfoState } from '@/reducers/info-reducer';
import {
  Container,
  FormContainer,
  InputContainer,
  PaymentInfo,
  PaymentSystemItem,
  PaymentSystems,
  SubmitContainer,
} from '@/styles/payments.styles';

type Props = {
  state: InfoState;
  dispatch: React.Dispatch<Action>;
};

const PaymentBlock = ({ dispatch, state }: Props) => {
  const t = useTranslations('BOOK.PAYMENT');
  const handleChange = (value: string, name: string) => {
    dispatch({
      type: 'CHANGE',
      field: name,
      payload: {
        value: name === 'name' ? value.toLocaleUpperCase() : value,
      },
    });
  };

  return (
    <Container>
      <Title size={28} fontFamily={cormorant.className}>
        {t('title')}
      </Title>
      <FormContainer>
        <InputComponent
          placeholder={t('placeholder_1')}
          fontFamily={cormorantLight.className}
          name='card'
          size={24}
          onChange={handleChange}
          value={state.card.value}
          error={state.card.error}
          mask='9999 9999 9999 9999'
        />
        <InputContainer>
          <InputComponent
            placeholder={t('placeholder_2')}
            fontFamily={cormorantLight.className}
            name='expiry'
            size={24}
            onChange={handleChange}
            value={state.expiry.value}
            error={state.expiry.error}
            mask='99/99'
          />
          <InputComponent
            type='text'
            placeholder={t('placeholder_3')}
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
          placeholder={t('placeholder_4')}
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
              {t('hint')}
            </Paragraph>
          </PaymentInfo>
        </SubmitContainer>
      </FormContainer>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default PaymentBlock;
