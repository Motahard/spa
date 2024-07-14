import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '../components/calendar';

const meta = {
  title: 'Example/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
        control: 'date'
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
