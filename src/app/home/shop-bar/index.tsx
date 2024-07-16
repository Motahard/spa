import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import {
  ButtonContainer,
  Card,
  CardsContainer,
  Container,
  ImageContainer,
  TitleContainer,
} from '@/app/home/shop-bar/styles';
import Button from '@/components/button';
import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';

type Props = {
  title: string;
  cards: {
    id: number;
    image: StaticImageData;
    description: string;
    price: string;
  }[];
  buttonText: string;
};

export const ShopBar = ({ title, cards, buttonText }: Props) => {
  return (
    <Container>
      <TitleContainer>
        <Title size={64} fontFamily={cormorant.className}>
          {title}
        </Title>
      </TitleContainer>
      <CardsContainer>
        {cards.map((item) => (
          <Card key={item.id}>
            <ImageContainer>
              <Image src={item.image} alt={item.description} />
            </ImageContainer>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              {item.description}
            </Paragraph>
            <Paragraph fontFamily={cormorant.className} size={24}>
              CA: {item.price}
            </Paragraph>
          </Card>
        ))}
      </CardsContainer>
      <ButtonContainer>
        <Link href='spa-services'>
          <Button text={buttonText} />
        </Link>
      </ButtonContainer>
    </Container>
  );
};
