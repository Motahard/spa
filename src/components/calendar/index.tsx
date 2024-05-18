import React from 'react';
import { Calendar as CalendarCore, CalendarProps } from 'react-calendar';
import { CalendarContainer } from '@/components/calendar/styles';

type Props = {
  value: CalendarProps['value'];
  setValue: React.Dispatch<CalendarProps['value']>;
  defaultView?: CalendarProps['defaultView'];
};

export const Calendar = ({ defaultView = 'month', value, setValue }: Props) => {
  const onChange = (
    value: CalendarProps['value'],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (value) {
      setValue(value);
    }
  };

  return (
    <CalendarContainer>
      <CalendarCore
        value={value}
        onChange={onChange}
        selectRange={false}
        defaultView={defaultView}
        locale="en-US"
        formatShortWeekday={(locale, date) =>
          date
            .toLocaleDateString('en-us', {
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
