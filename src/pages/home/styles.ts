import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 96px;
`;

export const HomeCard = styled.div`
  width: 100%;
  margin-bottom: 96px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  & > img {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-10%);
  left: 5%;
  max-width: 450px;
  text-align: center;
  & > h2 {
    line-height: 1.2;
  }
`;
