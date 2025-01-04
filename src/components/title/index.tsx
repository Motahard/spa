import { TitleComponent, TitleComponentProps } from '@/components/title/styles';

const defaultGaps = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

type Props = {
  fontFamily?: string;
  children?: string;
} & TitleComponentProps;

const Title = (props: Props) => {
  const { size, weight, fontFamily, color, children, ...restProps } = props;

  return (
    <TitleComponent
      size={size}
      weight={weight}
      className={fontFamily}
      color={color}
      {...defaultGaps}
      {...restProps}
    >
      {children}
    </TitleComponent>
  );
};

export default Title;
