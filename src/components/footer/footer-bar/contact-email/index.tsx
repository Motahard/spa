import { FormEvent } from 'react';
import Button from '@/components/button';
import {
  SubscribeButton,
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeTitle,
} from '@/components/footer/footer-bar/contact-email/styles';
import { cormorant, cormorantLight } from '@/constants';
import { InputComponent } from '@/components/input';

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
        <SubscribeInput>
          <InputComponent
            type="email"
            placeholder="Email"
            fontFamily={cormorantLight.className}
            size={18}
          />
        </SubscribeInput>
        <SubscribeButton>
          <Button type="submit" text="Submit" />
        </SubscribeButton>
      </SubscribeInputWrapper>
    </form>
  );
}

export default ContactEmail;
