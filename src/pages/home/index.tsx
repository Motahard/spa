import React from 'react';

import {
  Container,
  HomeCard,
  ImageContainer,
  ContentContainer,
} from '@/pages/home/styles';
import Image from 'next/image';

import homeImage from '@/assets/content/home1.png';
import Title from '@/components/title';
import Button from '@/components/button';
import Link from 'next/link';
import { cormorant } from '@/constants';
import InfoCard from '@/components/info-card';

import homeCard from '@/assets/content/home-card.png';
import {
  homeCardConfig,
  dogCollars,
  animalCarryOns,
} from '@/pages/home/config';
import { ShopBar } from '@/pages/home/shop-bar';

function HomePage() {
  return (
    <Container>
      <HomeCard>
        <ImageContainer>
          <Image src={homeImage} alt="homeImage" />
          <ContentContainer>
            <Title bottom={48} size={64} fontFamily={cormorant.className}>
              Book your doggy spa day!
            </Title>
            <Link href="book-appointment">
              <Button text="Book Appointment" />
            </Link>
          </ContentContainer>
        </ImageContainer>
      </HomeCard>
      <InfoCard
        image={homeCard}
        alt="homeCard"
        description={homeCardConfig.text}
      />
      <ShopBar {...dogCollars} />
      <ShopBar {...animalCarryOns} />
    </Container>
  );
}

export default HomePage;
