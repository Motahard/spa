import React, { forwardRef } from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import { InputComponent } from '@/app/components/input';
import Title from '@/app/components/title';
import { cormorant, cormorantLight } from '@/app/constants';
import { setContactValue } from '@/app/reducers/contact/contact-actions';
import { InfoAction, InfoState } from '@/app/reducers/info/types';
import { Container, InfoContainer } from '../../styles/info-block.styles';

type Props = {
  state: InfoState;
  dispatch: React.Dispatch<InfoAction>;
};

type Ref = React.LegacyRef<HTMLDivElement>;

const InfoBlock = (props: Props, ref: Ref) => {
  const t = useTranslations('BOOK.INFO');
  const { dispatch, state } = props;

  const handleChange = (value: string, name: string) => {
    dispatch(setContactValue(name, value));
  };

  return (
    <Container ref={ref}>
      <Title fontFamily={cormorant.className} size={40}>
        {t('title')}
      </Title>
      <InfoContainer>
        <InputComponent
          type='text'
          size={18}
          name='firstName'
          placeholder={t('placeholder_1')}
          fontFamily={cormorantLight.className}
          value={state.firstName.value}
          onChange={handleChange}
          error={state.firstName.error}
        />
        <InputComponent
          type='text'
          size={18}
          name='lastName'
          placeholder={t('placeholder_2')}
          fontFamily={cormorantLight.className}
          value={state.lastName.value}
          onChange={handleChange}
          error={state.lastName.error}
        />
        <InputComponent
          type='email'
          size={18}
          name='email'
          placeholder={t('placeholder_3')}
          fontFamily={cormorantLight.className}
          value={state.email.value}
          onChange={handleChange}
          error={state.email.error}
        />
        <InputComponent
          type='tel'
          size={18}
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
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};
export default forwardRef(InfoBlock);
