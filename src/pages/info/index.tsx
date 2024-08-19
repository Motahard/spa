import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useLazyQuery } from '@apollo/client';

import search from '@/assets/Search.svg';
import { InputComponent } from '@/components/input';
import Paragraph from '@/components/paragraph';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import { getSearchDog } from '@/gql/searchDog';
import {
  Container,
  CustomText,
  DogCard,
  DogDescription,
  DogImage,
  DogInfoContainer,
  InputContainer,
  SearchContainer,
} from '@/styles/info.styles';

type ApiData = {
  energy: number;
  good_with_other_dogs: number;
  good_with_strangers: number;
  image_link: string;
  min_life_expectancy: number;
  name: string;
};

function InfoPage() {
  const t = useTranslations('INFO');
  const [value, setValue] = useState('');
  const [data, setData] = useState<ApiData[]>([]);
  const [error, setError] = useState<string>();

  const [getSearchedDog] = useLazyQuery(getSearchDog, {
    fetchPolicy: 'network-only',
    onError(error) {
      setError(error.message);
    },
    onCompleted(data) {
      setData(data.dog);
      setError('');
    },
  });

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    getSearchedDog({
      variables: {
        name: value,
      },
    });
  };

  return (
    <Container>
      <Title top={48} fontFamily={cormorant.className} size={70} bottom={48}>
        {t('title')}
      </Title>
      <SearchContainer>
        <Paragraph fontFamily={cormorantLight.className} size={24}>
          {t('category')}: <CustomText>{t('selection')}</CustomText>
        </Paragraph>
        <InputContainer onSubmit={handleSubmit}>
          <InputComponent
            placeholder={t('search')}
            type='text'
            fontFamily={cormorant.className}
            size={18}
            rightAddons={search}
            value={value}
            onChange={handleChange}
          />
        </InputContainer>
      </SearchContainer>
      {error && (
        <Title top={30} fontFamily={cormorant.className} size={48} bottom={30}>
          {error}
        </Title>
      )}
      {data.length > 0 && (
        <DogInfoContainer>
          <DogCard>
            <DogImage>
              <Image src={data[0].image_link} alt='alt' layout='fill' />
            </DogImage>
            <Title
              top={30}
              fontFamily={cormorant.className}
              size={48}
              bottom={30}
            >
              {data[0].name}
            </Title>
          </DogCard>
          <DogDescription>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              {t('energy')}: {data[0].energy}
            </Paragraph>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              {t('min_life_expectancy')} {data[0].min_life_expectancy}
            </Paragraph>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              {t('good_with_strangers')}: {data[0].good_with_strangers}
            </Paragraph>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              {t('good_with_other_dogs')}: {data[0].good_with_other_dogs}
            </Paragraph>
          </DogDescription>
        </DogInfoContainer>
      )}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
};

export default InfoPage;
