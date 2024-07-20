import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 48px;
  margin-bottom: 16px;
  display: flex;

  @media (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DateWrapper = styled.div`
  flex: 1;
`;

export const TimeWrapper = styled.div`
  margin-top: 16px;
  flex: 1;
`;

export const TimeContainer = styled.div`
  margin-top: 24px;

  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const DateTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;
