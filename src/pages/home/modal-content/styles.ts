import styled from 'styled-components';

import { colors } from '@/constants';

export const Container = styled.div`
  padding: 24px;
  gap: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesciptionWrapper = styled.div`
  flex: 1;
`;

export const ImageWrapper = styled.div`
  flex: 1.3;
  border: 10px solid ${colors.roseyCheck};

  & > img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const FormWrapper = styled.form`
  margin: 24px 0 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
