import { colors } from '@/constants';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 48px;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 1439px) {
    flex-direction: column;
    padding: 8px;
  }
`;

export const Card = styled.div``;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  & > img {
    border: 5px solid ${colors.pinkKisses};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 48px;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 48px;
  justify-content: center;
`;
