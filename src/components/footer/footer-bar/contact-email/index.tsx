import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import Button from '@/components/button';
import {
  SubscribeButton,
  SubscribeForm,
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeTitle,
} from '@/components/footer/footer-bar/contact-email/styles';
import { InputComponent } from '@/components/input';
import { cormorant, cormorantLight } from '@/constants';
import { DEFAULT_MESSAGE, FROM_NAME } from '@/constants/email';
import { useSendEmail } from '@/hooks/use-send-email';

function ContactEmail() {
  const t = useTranslations('FOOTER.CONTACT');
  const [value, setValue] = useState('');
  const { sendEmail, loading, error, clearError } = useSendEmail();

  useEffect(() => {
    if (error) {
      setTimeout(clearError, 3000);
    }
  }, [error, clearError]);

  const handleChange = (value: string) => {
    clearError();
    setValue(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const params = {
      from_name: FROM_NAME,
      recipient: value,
      message: DEFAULT_MESSAGE,
    };

    await sendEmail(params);
    setValue('');
  };

  return (
    <SubscribeForm onSubmit={handleSubmit}>
      <SubscribeTitle className={cormorant.className}>
        {t('title')}
      </SubscribeTitle>
      <SubscribeInputWrapper>
        <SubscribeInput>
          <InputComponent
            type='email'
            placeholder={t('placeholder')}
            fontFamily={cormorantLight.className}
            value={value}
            onChange={handleChange}
            size={18}
            error={error}
          />
        </SubscribeInput>
        <SubscribeButton>
          <Button type='submit' text={t('button')} loading={loading} />
        </SubscribeButton>
      </SubscribeInputWrapper>
    </SubscribeForm>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default ContactEmail;
