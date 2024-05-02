import styled from 'styled-components';
import { colors } from '@/constants';

export type TitleComponentProps = {
  size?: number;
  weight?: number;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  color?: string;
};

export const TitleComponent = styled.h2<TitleComponentProps>`
  font-size: ${(props) => props.size ?? '16'}px;
  font-weight: ${(props) => props.size ?? '700'};
  margin: ${(props) =>
    `${props.top}px ${props.right}px ${props.bottom}px ${props.left}px`};
  color: ${(props) => props.color ?? colors.charCoal};
`;
