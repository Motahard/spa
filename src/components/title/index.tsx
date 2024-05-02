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

function Title({
  fontFamily,
  size,
  weight,
  children,
  color,
  ...restProps
}: Props) {
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
}

export default Title;
