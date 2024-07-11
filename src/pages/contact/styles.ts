import { colors } from '@/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const EmailText = styled.span`
  color: ${colors.pinkKisses};
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;
  margin-top: 96px;
  padding: 0 100px;

  @media (max-width: 1439px) {
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 24px;

    & > button {
      margin-top: 24px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 24px;
  & > div {
    width: 100%;
    & > input {
      width: 100%;
    }
  }
  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 0;
  }
`;
