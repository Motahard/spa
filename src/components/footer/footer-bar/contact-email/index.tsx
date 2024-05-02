import { FormEvent } from 'react';
import Button from '@/components/button';
import {
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeTitle,
} from '@/components/footer/footer-bar/contact-email/styles';
import { cormorant } from '@/constants';

function ContactEmail() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submited');
  };

  return (
    <form onSubmit={handleSubmit}>
      <SubscribeTitle className={cormorant.className}>
        Subscribe to our Newsletter
      </SubscribeTitle>
      <SubscribeInputWrapper>
        <SubscribeInput
          type="email"
          name="Email"
          id="contact-email"
          placeholder="Email"
        />
        <Button type="submit" text="Submit" />
      </SubscribeInputWrapper>
    </form>
  );
}

export default ContactEmail;
