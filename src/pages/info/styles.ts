import { colors } from '@/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 106px;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const CustomText = styled.span`
  color: ${colors.pinkKisses};
`;

export const InputContainer = styled.div`
  width: 300px;
`;

export const DogInfoContainer = styled.div`
    margin-top: 96px;
    width: 100%;
`;

export const DogCard = styled.div`
    background-color: ${colors.inHouse};
    padding-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DogImage = styled.div`
    & > img {
        height: 100%;
        min-width: 100%;
    }
`;

export const DogDescription = styled.div`
    margin-top: 64px;
    & > p {
        margin-bottom: 18px;
    }
`;