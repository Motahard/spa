import { colors } from '@/constants';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: 1000px;
  z-index: 1000;

  @media (max-width: 1439px) {
    max-width: 400px;
  }
`;

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  border: 10px solid ${colors.roseyCheck};
  padding: 32px 48px;
  z-index: 1000;
  min-height: 400px;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
