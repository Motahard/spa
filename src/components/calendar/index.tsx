import React from 'react';
import {
  Calendar as CalendarCore,
  CalendarProps,
  TileDisabledFunc,
} from 'react-calendar';

import { CalendarContainer } from '@/components/calendar/styles';

type Props = {
  value: CalendarProps['value'];
  setValue: React.Dispatch<CalendarProps['value']>;
  defaultView?: CalendarProps['defaultView'];
  locale?: string;
};

export const Calendar = ({
  defaultView = 'month',
  value,
  setValue,
  locale = 'en-US',
}: Props) => {
  const onChange = (
    value: CalendarProps['value'],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (value) {
      setValue(value);
    }
  };

  const currentLocale = locale === 'en' ? 'en-US' : 'ru-RU';

  const tileDisabled: TileDisabledFunc = (params) => {
    return params.date < new Date();
  };

  return (
    <CalendarContainer>
      <CalendarCore
        value={value}
        onChange={onChange}
        tileDisabled={tileDisabled}
        selectRange={false}
        defaultView={defaultView}
        locale={currentLocale}
        formatShortWeekday={(locale, date) =>
          date
            .toLocaleDateString(currentLocale, {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
            .slice(0, 1)
        }
        next2Label={null}
        prev2Label={null}
      />
    </CalendarContainer>
  );
};
