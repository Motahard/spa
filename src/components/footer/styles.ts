import styled from 'styled-components';
import { colors } from '@/constants';

export const ListItem = styled.p`
  color: ${colors.charCoal};
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: ${colors.charCoal};
  }

  & > a:hover {
    color: ${colors.bronzedRose};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.roseyCheck};
  padding: 8px 0;
  text-align: center;

  @media (max-width: 1439px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`;
