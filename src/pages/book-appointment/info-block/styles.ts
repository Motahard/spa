import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 48px;

  @media (max-width: 1439px) {
    padding: 12px;
    margin-top: 24px;
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  margin-top: 48px;
`;
