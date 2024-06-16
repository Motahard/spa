import {
  ParagraphComponent,
  ParagraphComponentProps,
} from '@/components/paragraph/styles';
import { CSSProperties } from 'react';

type Props = {
  fontFamily?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
} & ParagraphComponentProps;

function Paragraph({
  fontFamily,
  size,
  weight,
  children,
  color,
  style,
}: Props) {
  return (
    <ParagraphComponent
      size={size}
      weight={weight}
      style={style}
      className={fontFamily}
      color={color}
    >
      {children}
    </ParagraphComponent>
  );
}

export default Paragraph;
