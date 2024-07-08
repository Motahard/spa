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

export const InputContainer = styled.form`
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
  position: relative;
  width: 600px;
  height: 600px;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const DogDescription = styled.div`
  margin-top: 64px;
  & > p {
    margin-bottom: 18px;
  }
`;
