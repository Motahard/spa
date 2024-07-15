import { colors } from '@/constants';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1439px) {
    margin-bottom: 0;
  }
`;

export const FormContainer = styled.div`
  margin-top: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const PaymentSystemItem = styled.div`
  border: 1px solid ${colors.prevMonthDate};
  padding: 10px 15px;
  border-radius: 5px;

  & > img {
    float: left;
    width: 34px;
    height: 24px;
  }
`;

export const PaymentSystems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const PaymentInfo = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 36px;

  & > p {
    text-align: center;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > button {
    max-width: 300px;
    margin: 0 auto;
  }
`;
