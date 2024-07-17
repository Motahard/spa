import styled from 'styled-components';

import { colors } from '@/constants';

export const MapDescription = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1439px) {
    align-items: center;
    gap: 24px;
    flex-direction: column;
  }
`;

export const MapDesciptionItem = styled.div`
  flex: 1;
`;

export const MapContainer = styled.div`
  margin-top: 156px;
  border: 5px solid ${colors.inHouse};

  @media (max-width: 1439px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
