import React, { useState } from 'react';

import {
  Container,
  SearchContainer,
  CustomText,
  InputContainer,
  DogInfoContainer,
  DogCard,
  DogImage,
  DogDescription,
} from '@/pages/info/styles';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import Paragraph from '@/components/paragraph';
import { InputComponent } from '@/components/input';
import search from '@/assets/Search.svg';
import Image from 'next/image';
import { useLazyQuery } from '@apollo/client';
import { getSearchDog } from '@/gql/searchDog';

type ApiData = {
  energy: number;
  good_with_other_dogs: number;
  good_with_strangers: number;
  image_link: string;
  min_life_expectancy: number;
  name: string;
};

function InfoPage() {
  const [value, setValue] = useState('');
  const [data, setData] = useState<ApiData[]>([]);

  const [getSearchedDog] = useLazyQuery(getSearchDog, {
    fetchPolicy: 'network-only',
    onCompleted(data) {
      console.log(data);
      setData(data.searchDog);
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
        INFO
      </Title>
      <SearchContainer>
        <Paragraph fontFamily={cormorantLight.className} size={24}>
          Current Selection: <CustomText>Beds & Cushions</CustomText>
        </Paragraph>
        <InputContainer onSubmit={handleSubmit}>
          <InputComponent
            placeholder="Search"
            type="text"
            fontFamily={cormorant.className}
            size={18}
            rightAddons={search}
            value={value}
            onChange={handleChange}
          />
        </InputContainer>
      </SearchContainer>
      {data.length > 0 && (
        <DogInfoContainer>
          <DogCard>
            <DogImage>
              <Image src={data[0].image_link} alt="alt" fill={true} />
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
              Energy: {data[0].energy}
            </Paragraph>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              Min life expectancy: {data[0].min_life_expectancy}
            </Paragraph>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              Good with strangers: {data[0].good_with_strangers}
            </Paragraph>
            <Paragraph fontFamily={cormorantLight.className} size={24}>
              Good with other dogs: {data[0].good_with_other_dogs}
            </Paragraph>
          </DogDescription>
        </DogInfoContainer>
      )}
    </Container>
  );
}

export default InfoPage;
