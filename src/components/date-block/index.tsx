import React from 'react';
import { CalendarProps } from 'react-calendar';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import { Calendar } from '@/components/calendar';
import { InputComponent } from '@/components/input';
import Title from '@/components/title';
import { cormorant } from '@/constants';
import { checkboxConfig } from '@/helpers/date-block.config';
import {
  Container,
  DateTitleContainer,
  DateWrapper,
  TimeContainer,
  TimeWrapper,
} from '@/styles/date.styles';

type Props = {
  date: CalendarProps['value'];
  time: string;
  setDate: React.Dispatch<
    React.SetStateAction<CalendarProps['value'] | undefined>
  >;
  setTime: React.Dispatch<React.SetStateAction<string>>;
};

function DateBlock({ date, time, setDate, setTime }: Props) {
  const t = useTranslations('BOOK.DATE');
  const { locale } = useRouter();
  const handleClick = (id?: string) => {
    setTime(id ?? '');
  };

  const getCurrentDate = () => {
    const today = new Date().toLocaleDateString();
    return `${t('title')} ${today}`;
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
          <Calendar
            defaultView='month'
            value={date}
            setValue={setDate}
            locale={locale}
          />
        </DateTitleContainer>
      </DateWrapper>
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

export default DateBlock;
