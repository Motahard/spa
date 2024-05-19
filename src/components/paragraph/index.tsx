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
  textAlign,
  color,
  style,
}: Props) {
  return (
    <ParagraphComponent
      size={size}
      weight={weight}
      style={style}
      className={fontFamily}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </ParagraphComponent>
  );
}

export default Paragraph;
