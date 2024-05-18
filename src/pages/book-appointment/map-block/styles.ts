import { colors } from '@/constants';
import styled from 'styled-components';

export const MapDescription = styled.div`
  display: flex;
  justify-content: center;
`;

export const MapDesciptionItem = styled.div`
  flex: 1;
`;

export const MapContainer = styled.div`
  margin-top: 156px;
  border: 5px solid ${colors.inHouse};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
