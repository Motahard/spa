import { ButtonComponent } from '@/components/button/styles';
import { cormorant } from '@/constants';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  text?: string;
  loading?: boolean;
};

function Button({ type, text, loading = false }: Props) {
  return (
    <ButtonComponent type={type} className={cormorant.className}>
      {text}
      {loading && <div>loading</div>}
    </ButtonComponent>
  );
}

export default Button;
