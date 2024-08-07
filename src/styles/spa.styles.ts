import styled from 'styled-components';

export const SpaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: auto;

  @media (max-width: 1439px) {
    padding: 8px;
  }
`;
