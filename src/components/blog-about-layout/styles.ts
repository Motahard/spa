import styled from 'styled-components';

import { colors } from '@/constants';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const ContentWrapper = styled.div`
  margin-top: 32px;
`;

export const ContentItem = styled.div`
  display: flex;
  gap: 48px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 96px;

  @media (max-width: 1439px) {
    gap: 0;
    margin-bottom: 48px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  & > img {
    width: 100%;
    border: 5px solid ${colors.pinkKisses};
  }
`;
