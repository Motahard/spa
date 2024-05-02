import styled from 'styled-components';
import { colors } from '@/constants';

export const SocialMediaContainer = styled.div``;

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
`;

export const SocialListItem = styled.li`
  &:first-child {
    padding-left: 24px;
  }
`;
