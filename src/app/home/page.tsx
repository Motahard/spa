"use client"

import React, { useEffect, useState } from 'react';

import {
  Container,
  HomeCard,
  ImageContainer,
  ContentContainer,
} from '@/app/home/styles';
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
} from '@/app/home/config';
import { ShopBar } from '@/app/home/shop-bar';
import { Modal } from '@/components/modal';
import { ModalContent } from './modal-content';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const previousDate = JSON.stringify(localStorage.getItem('date'));

    if (previousDate) {
      const dateFormat = +new Date(previousDate);
      const differenceDate = Date.now() - dateFormat;

      if (differenceDate < 6) {
        setModalOpen(false);
      } else {
        setModalOpen(true);
        localStorage.setItem('date', new Date().toString());
      }
    }
  }, []);

  const handleModalClose = () => {
    setModalOpen(false);
  };

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
      {modalOpen && (
        <Modal onClose={handleModalClose}>
          <ModalContent />
        </Modal>
      )}
    </Container>
  );
}

export default HomePage;
