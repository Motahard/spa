import React from 'react';
import { CalendarProps } from 'react-calendar';

import { Calendar } from '@/components/calendar';
import { InputComponent } from '@/components/input';
import Title from '@/components/title';
import { cormorant } from '@/constants';
import { checkboxConfig } from '@/pages/book-appointment/date-block/config';
import {
  Container,
  DateTitleContainer,
  DateWrapper,
  TimeContainer,
  TimeWrapper,
} from '@/pages/book-appointment/date-block/styles';

type Props = {
  date: CalendarProps['value'];
  time: string;
  setDate: React.Dispatch<
    React.SetStateAction<CalendarProps['value'] | undefined>
  >;
  setTime: React.Dispatch<React.SetStateAction<string>>;
};

export function DateBlock({ date, time, setDate, setTime }: Props) {
  const handleClick = (id?: string) => {
    setTime(id ?? '');
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
              checked={item.name === time}
            />
          ))}
        </TimeContainer>
      </TimeWrapper>
      <DateWrapper>
        <DateTitleContainer>
          <Calendar defaultView='month' value={date} setValue={setDate} />
        </DateTitleContainer>
      </DateWrapper>
    </Container>
  );
}
