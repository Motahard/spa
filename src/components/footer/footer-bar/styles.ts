import styled from 'styled-components';
import { colors } from '@/constants';

export const FooterBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: flex-start;
  padding: 32px 64px;
  justify-content: space-between;
  background-color: ${colors.inHouse};
  border-top: 12px solid ${colors.roseyCheck};

  @media (max-width: 1439px) {
    grid-template-columns: 1fr;
    padding: 8px 8px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
