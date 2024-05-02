import styled from 'styled-components';
import { colors } from '@/constants';

export const SubscribeTitle = styled.p`
  color: ${colors.charCoal};
  font-size: 32px;
`;

export const SubscribeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 48px;
  gap: 24px;
  width: 600px;
`;

export const SubscribeInput = styled.input`
  height: 60px;
  border: none;
  width: 100%;
  padding: 16px 24px;
  border-radius: 5px;
`;
