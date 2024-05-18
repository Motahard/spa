import Title from '@/components/title';
import { cormorant } from '@/constants';
import React, { useState } from 'react';
import {
  Container,
  DateWrapper,
  TimeContainer,
  TimeWrapper,
  DateTitleContainer,
} from '@/pages/book-appointment/date-block/styles';
import { InputComponent } from '@/components/input';
import { checkboxConfig } from '@/pages/book-appointment/date-block/config';
import { Calendar } from '@/components/calendar';
import { CalendarProps } from 'react-calendar';

export function DateBlock() {
  const [checked, setChecked] = useState<string>('');
  const [date, setDate] = useState<CalendarProps['value']>(new Date());

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
              key={item.name}
              onClick={handleClick}
              checked={item.name === checked}
            />
          ))}
        </TimeContainer>
      </TimeWrapper>
      <DateWrapper>
        <DateTitleContainer>
          <Calendar defaultView="month" value={date} setValue={setDate} />
        </DateTitleContainer>
      </DateWrapper>
    </Container>
  );
}
