import React from 'react';

import {
  Container,
  SearchContainer,
  CustomText,
  InputContainer,
} from '@/pages/info/styles';
import Title from '@/components/title';
import { cormorant, cormorantLight } from '@/constants';
import Paragraph from '@/components/paragraph';
import { InputComponent } from '@/components/input';
import search from '@/assets/Search.svg';

function AboutPage() {
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
    </Container>
  );
}

export default AboutPage;
