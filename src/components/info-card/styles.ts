import styled from 'styled-components';
import { colors } from '@/constants';

type ContentItemProps = {
  flexDirection?: string;
};

export const ContentItem = styled.div<ContentItemProps>`
  display: flex;
  gap: 48px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 96px;
  flex-direction: ${(props) => props.flexDirection};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  & > img {
    border: 5px solid ${colors.pinkKisses};
  }
`;

export const TextWrapper = styled.div`
  flex-basis: 100%;
  & > p {
    text-align: center;
    padding: 48px;
  }
`;
