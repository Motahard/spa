import { ButtonComponent } from '@/components/button/styles';
import { cormorant } from '@/constants';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  text?: string;
};

function Button({ type, text }: Props) {
  return (
    <ButtonComponent type={type} className={cormorant.className}>
      {text}
    </ButtonComponent>
  );
}

export default Button;
