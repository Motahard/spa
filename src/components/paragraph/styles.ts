import styled from 'styled-components';
import { colors } from '@/constants';

export type ParagraphComponentProps = {
  size?: number;
  weight?: number;
  color?: string;
};

export const ParagraphComponent = styled.p<ParagraphComponentProps>`
  font-size: ${(props) => props.size ?? '16'}px;
  font-weight: ${(props) => props.size ?? '700'};
  color: ${(props) => props.color ?? colors.charCoal};
`;
