import styled from 'styled-components';
import { colors } from '@/constants';

export const SubscribeTitle = styled.p`
  color: ${colors.charCoal};
  font-size: 32px;
`;

export const SubscribeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 48px;
  gap: 24px;
  width: 600px;

  @media (max-width: 1439px) {
    display: block;
    width: 100%;
  }
`;

export const SubscribeForm = styled.form`
  @media (max-width: 1439px) {
    width: 100%;
  }
`;

export const SubscribeInput = styled.div`
  flex: 5;
  height: 100%;
  & > div {
    margin-bottom: 0;
    @media (max-width: 1439px) {
      max-width: 600px;
      margin-bottom: 16px;
    }
  }
`;

export const SubscribeButton = styled.div`
  flex: 1;
  height: 100%;
`;
