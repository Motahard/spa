import styled from 'styled-components';
import { colors } from '@/constants';

export const ListItem = styled.p`
  color: ${colors.charCoal};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.roseyCheck};
  padding: 8px 0;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`;
