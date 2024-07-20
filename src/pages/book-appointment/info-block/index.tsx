import React, { forwardRef } from 'react';

import { Action, InfoState } from '../reducers/info-reducer';

import { InputComponent } from '@/components/input';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import {
  Container,
  InfoContainer,
} from '@/pages/book-appointment/info-block/styles';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

type Props = {
  state: InfoState;
  dispatch: React.Dispatch<Action>;
};

type Ref = React.LegacyRef<HTMLDivElement>;

const InfoBlock = (props: Props, ref: Ref) => {
  const t = useTranslations('BOOK.INFO');
  const { dispatch, state } = props;

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
    <Container ref={ref}>
      <Title fontFamily={cormorant.className} size={40}>
        {t('title')}
      </Title>
      <InfoContainer>
        <InputComponent
          type='text'
          name='firstName'
          placeholder={t('placeholder_1')}
          fontFamily={cormorantLight.className}
          value={state.firstName.value}
          onChange={handleChange}
          error={state.firstName.error}
        />
        <InputComponent
          type='text'
          name='lastName'
          placeholder={t('placeholder_2')}
          fontFamily={cormorantLight.className}
          value={state.lastName.value}
          onChange={handleChange}
          error={state.lastName.error}
        />
        <InputComponent
          type='email'
          name='email'
          placeholder={t('placeholder_3')}
          fontFamily={cormorantLight.className}
          value={state.email.value}
          onChange={handleChange}
          error={state.email.error}
        />
        <InputComponent
          type='tel'
          name='phone'
          placeholder={t('placeholder_4')}
          fontFamily={cormorantLight.className}
          value={state.phone.value}
          onChange={handleChange}
          error={state.phone.error}
        />
      </InfoContainer>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../../messages/${context.locale}.json`))
        .default,
    },
  };
};
export default forwardRef(InfoBlock);
