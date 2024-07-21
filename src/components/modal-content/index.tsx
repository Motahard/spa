import React, { FormEventHandler, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import emailjs from '@emailjs/browser';

import modalImage from '@/assets/content/modal-image.jpg';
import Button from '@/components/button';
import { InputComponent } from '@/components/input';
import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { cinzel_decorative, cormorantLight } from '@/constants';
import { DEFAULT_MESSAGE, FROM_NAME } from '@/constants/email';
import { useSendEmail } from '@/hooks/use-send-email';
import {
  ButtonWrapper,
  Container,
  DesciptionWrapper,
  FormWrapper,
  ImageWrapper,
} from '@/styles/home-modal.styles';

const ModalContent = () => {
  const t = useTranslations('HOME');
  const [emailInput, setEmail] = useState('');
  const { loading, sendEmail, error, clearError } = useSendEmail();

  useEffect(() => {
    emailjs.init({ publicKey: process.env.EMAIL_PUBLIC || '' });
  }, []);

  const handleChange = (value: string) => {
    clearError();
    setEmail(value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const params = {
      from_name: FROM_NAME,
      recipient: emailInput,
      message: DEFAULT_MESSAGE,
    };

    await sendEmail(params);
    setEmail('');
  };

  return (
    <Container>
      <DesciptionWrapper>
        <Title fontFamily={cinzel_decorative.className} size={40} bottom={16}>
          {t('modal_title')}
        </Title>
        <Paragraph fontFamily={cormorantLight.className} size={24}>
          {t('modal_subtitle')}
        </Paragraph>
        <FormWrapper onSubmit={onSubmit}>
          <InputComponent
            type='email'
            placeholder={t('modal_email_placeholder')}
            fontFamily={cormorantLight.className}
            size={18}
            value={emailInput}
            onChange={handleChange}
            error={error}
          />
          <ButtonWrapper>
            <Button
              text={t('modal_email_button')}
              type='submit'
              loading={loading}
            />
          </ButtonWrapper>
        </FormWrapper>
        <Paragraph
          fontFamily={cormorantLight.className}
          size={14}
          style={{ textAlign: 'center' }}
        >
          {t('modal_hint')}
        </Paragraph>
      </DesciptionWrapper>
      <ImageWrapper>
        <Image src={modalImage} alt='modal' />
      </ImageWrapper>
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

export default ModalContent;
