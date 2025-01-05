import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Button from '@/app/components/button';
import InfoCard from '@/app/components/info-card';
import { Modal } from '@/app/components/modal';
import ModalContent from '@/app/components/modal-content';
import ShopBar from '@/app/components/shop-bar';
import Title from '@/app/components/title';
import { cormorant } from '@/app/constants';
import { homeImages } from '@/app/constants/images';
import { animalCarryOns, dogCollars } from '../../app/helpers/shop-bar.config';
import {
  Container,
  ContentContainer,
  HomeCard,
  ImageContainer,
} from '../../app/styles/home.styles';

const HomePage = () => {
  const t = useTranslations('HOME');
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
          <Image src={homeImages.homeImage} alt='homeImage' />
          <ContentContainer>
            <Title bottom={48} size={64} fontFamily={cormorant.className}>
              {t('title')}
            </Title>
            <Link href='book-appointment'>
              <Button text={t('title_button')} />
            </Link>
          </ContentContainer>
        </ImageContainer>
      </HomeCard>
      <InfoCard
        image={homeImages.homeCard}
        alt='homeCard'
        description={t('info_card')}
      />
      <ShopBar
        cards={dogCollars([
          [t('dog_shop_item_title'), t('dog_shop_item_subtitle'), '350$'],
          [t('dog_shop_item_title'), t('dog_shop_item_subtitle'), '1225$'],
          [t('dog_shop_item_title'), t('dog_shop_item_subtitle'), '1500$'],
        ])}
        title={t('dog_shop_title')}
        buttonText={t('dog_shop_item_button')}
      />
      <ShopBar
        cards={animalCarryOns([
          [t('animal_shop_item_title'), t('animal_shop_item_subtitle'), '125$'],
          [t('animal_shop_item_title'), t('animal_shop_item_subtitle'), '135$'],
          [t('animal_shop_item_title'), t('animal_shop_item_subtitle'), '95$'],
        ])}
        title={t('animal_shop_title')}
        buttonText={t('animal_shop_item_button')}
      />
      {modalOpen && (
        <Modal onClose={handleModalClose}>
          <ModalContent />
        </Modal>
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default HomePage;
