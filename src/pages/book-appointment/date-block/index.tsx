import Title from '@/components/title';
import { cormorant } from '@/constants';
import React, { useState } from 'react';
import {
  Container,
  DateContainer,
  DateWrapper,
  TimeContainer,
  TimeWrapper,
  DateTitleContainer,
} from '@/pages/book-appointment/date-block/styles';
import { InputComponent } from '@/components/input';
import { checkboxConfig } from '@/pages/book-appointment/date-block/config';

export function DateBlock() {
  const [checked, setChecked] = useState<string>('');

  const handleClick = (id?: string) => {
    setChecked(id ?? '');
  };

  const getCurrentDate = () => {
    const today = new Date().toLocaleDateString();
    return `Choose a timeslot on ${today}`;
  };

  return (
    <Container>
      <TimeWrapper>
        <Title fontFamily={cormorant.className} size={24}>
          {getCurrentDate()}
        </Title>
        <TimeContainer>
          {checkboxConfig.map((item) => (
            <InputComponent
              {...item}
              onClick={handleClick}
              checked={item.name === checked}
            />
          ))}
        </TimeContainer>
      </TimeWrapper>
      <DateWrapper>
        <DateTitleContainer>
          <Title fontFamily={cormorant.className} size={24}>
            Select Dates
          </Title>
          <p className={cormorant.className}>!@312312opkadsop</p>
        </DateTitleContainer>
        <DateContainer></DateContainer>
      </DateWrapper>
    </Container>
  );
}
