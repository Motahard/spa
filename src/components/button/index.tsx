import Image from 'next/image';

import loadingImage from '@/assets/loading.svg';
import { ButtonComponent } from '@/components/button/styles';
import { cormorant } from '@/constants';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  text?: string;
  loading?: boolean;
};

const Button = ({ type, text, loading = false }: Props) => {
  return (
    <ButtonComponent
      type={type}
      className={cormorant.className}
      disabled={loading}
    >
      {loading ? <Image src={loadingImage} alt='loading' /> : text}
    </ButtonComponent>
  );
};

export default Button;
