import React, { CSSProperties } from 'react';

import {
  ParagraphComponent,
  ParagraphComponentProps,
} from '@/app/components/paragraph/styles';

type Props = {
  fontFamily?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
} & ParagraphComponentProps;

const Paragraph = (props: Props) => {
  const { size, weight, style, fontFamily, color, children } = props;

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
};

export default Paragraph;
