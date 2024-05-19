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
