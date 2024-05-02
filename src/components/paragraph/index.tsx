import {
  ParagraphComponent,
  ParagraphComponentProps,
} from '@/components/paragraph/styles';

type Props = {
  fontFamily?: string;
  children?: string;
} & ParagraphComponentProps;

function Paragraph({
  fontFamily,
  size,
  weight,
  children,
  textAlign,
  color,
}: Props) {
  return (
    <ParagraphComponent
      size={size}
      weight={weight}
      className={fontFamily}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </ParagraphComponent>
  );
}

export default Paragraph;
