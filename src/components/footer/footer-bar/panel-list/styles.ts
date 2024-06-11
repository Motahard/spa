import styled from 'styled-components';
import { colors } from '@/constants';

type PanelListWrapperProps = {
  alignItems: string;
};

export const PanelListWrapper = styled.div<PanelListWrapperProps>`
  display: flex;
  flex-direction: column;
`;

export const PanelListTitle = styled.p`
  font-size: 32px;
  color: ${colors.charCoal};
`;

export const PanelListComponent = styled.ul`
  list-style-type: none;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const PanelListItem = styled.li`
  margin-bottom: 8px;
  font-size: 24px;

  & > a {
    text-decoration: none;
    color: ${colors.charCoal};
  }

  & > a:hover {
    color: ${colors.pinkKisses};
  }
`;
