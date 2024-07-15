import styled from 'styled-components';
import bookImage from '@/assets/content/book.jpg';

export const Container = styled.div``;

export const BookTitleImageWrapper = styled.div`
  min-height: 50vh;
  background-image: ${`url(${bookImage.src})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.9;
  padding: 108px;

  @media (max-width: 1439px) {
    height: 100%;
    width: 100%;
    padding: 0;
    padding-top: 36px;
    padding-left: 18px;
    padding-bottom: 36px;

    & > div > h2 {
      font-size: 40px;
    }
  }
`;

export const BookTitleWrapper = styled.div`
  max-width: 30vw;
  margin-bottom: 150px;

  @media (max-width: 1439px) {
    margin-bottom: 0;
  }
`;

export const BookContainer = styled.div`
  padding: 48px 16px;
  max-width: 1500px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0 96px;

  @media (max-width: 1439px) {
    grid-template-columns: 1fr;
  }
`;

export const FormContainer = styled.form`
  grid-template-columns: repeat(1fr);
  gap: 108px;
`;

export const CommentContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > button {
    max-width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 1439px) {
    & > div {
      padding: 8px;
    }

    & > button {
      margin-bottom: 48px;
    }
  }
`;

export const PaypalContainer = styled.div`
  width: 100%;
`;
