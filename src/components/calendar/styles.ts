import styled from 'styled-components';

import { colors, cormorant } from '@/constants';

export const CalendarContainer = styled.div`
  .react-calendar__navigation {
    display: flex;
    align-items: center;

    .react-calendar__navigation__label {
      font-weight: bold;
      background: ${colors.white};
      color: ${colors.charCoal};
      font-size: 24px;
      ${cormorant.style};
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      cursor: pointer;
      background: ${colors.white};
      color: ${colors.charCoal};
      font-size: 48px;
      ${cormorant.style};
    }
  }

  .react-calendar {
    width: 400px;
    max-width: 100%;
    background-color: #fff;
    color: #222;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
    color: ${colors.prevMonthDate};
  }
  .react-calendar__month-view__days__day--weekend {
    color: red;
  }

  abbr[title] {
    text-decoration: none;
    color: ${colors.pinkKisses};
    font-size: 14px;
  }

  .react-calendar__tile {
    text-align: center;
    background: ${colors.white};
    color: ${colors.charCoal};
    cursor: pointer;

    &:disabled {
      color: ${colors.prevMonthDate};
      cursor: not-allowed;
    }
  }

  .react-calendar__tile--range {
    background-color: ${colors.pinkKisses};
    color: ${colors.white};
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    color: red;
  }
  button {
    color: blue;
    border: 0;
    margin: 5px 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;
  }
`;
