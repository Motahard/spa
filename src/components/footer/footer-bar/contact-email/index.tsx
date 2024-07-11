import { useEffect, useState } from 'react';
import Button from '@/components/button';
import {
  SubscribeButton,
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeTitle,
  SubscribeForm,
} from '@/components/footer/footer-bar/contact-email/styles';
import { cormorant, cormorantLight } from '@/constants';
import { InputComponent } from '@/components/input';
import { useSendEmail } from '@/hooks/use-send-email';
import { DEFAULT_MESSAGE, FROM_NAME } from '@/constants/email';

function ContactEmail() {
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
        Subscribe to our Newsletter
      </SubscribeTitle>
      <SubscribeInputWrapper>
        <SubscribeInput>
          <InputComponent
            type="email"
            placeholder="Email"
            fontFamily={cormorantLight.className}
            value={value}
            onChange={handleChange}
            size={18}
            error={error}
          />
        </SubscribeInput>
        <SubscribeButton>
          <Button type="submit" text="Submit" loading={loading} />
        </SubscribeButton>
      </SubscribeInputWrapper>
    </SubscribeForm>
  );
}

export default ContactEmail;
