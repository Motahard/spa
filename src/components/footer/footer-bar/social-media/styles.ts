import styled from 'styled-components';
import { colors } from '@/constants';

export const SocialMediaContainer = styled.div`
  @media (max-width: 1439px) {
    margin-bottom: 24px;
  }
`;

export const SocialMediaTitle = styled.p`
  font-size: 32px;
  color: ${colors.charCoal};
`;

export const SocialList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 50px;
  margin-top: 16px;
  width: 600px;

  @media (max-width: 1439px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }
`;

export const SocialListItem = styled.li`
  &:first-child {
    padding-left: 24px;
    @media (max-width: 1439px) {
      padding-left: 0;
    }
  }
`;
