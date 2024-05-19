import React from 'react';

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
import imageExample from '@/assets/content/about2.jpg';

function InfoPage() {
  return (
    <Container>
      <Title top={48} fontFamily={cormorant.className} size={70} bottom={48}>
        INFO DOG
      </Title>
      <SearchContainer>
        <Paragraph fontFamily={cormorantLight.className} size={24}>
          Current Selection: <CustomText>Beds & Cushions</CustomText>
        </Paragraph>
        <InputContainer>
          <InputComponent
            placeholder="Search"
            type="text"
            fontFamily={cormorant.className}
            size={18}
            rightAddons={search}
          />
        </InputContainer>
      </SearchContainer>
      <DogInfoContainer>
        <DogCard>
          <DogImage>
            <Image src={imageExample} alt="alt" />
          </DogImage>
          <Title
            top={30}
            fontFamily={cormorant.className}
            size={48}
            bottom={30}
          >
            Siberian Husky
          </Title>
        </DogCard>
        <DogDescription>
          <Paragraph fontFamily={cormorantLight.className} size={24}>
            Energy: 5
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className} size={24}>
            Min life expectancy: 5
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className} size={24}>
            Good with strangers: 5
          </Paragraph>
          <Paragraph fontFamily={cormorantLight.className} size={24}>
            Good with other dogs: 5
          </Paragraph>
        </DogDescription>
      </DogInfoContainer>
    </Container>
  );
}

export default InfoPage;
