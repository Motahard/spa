import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { loading: false },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary'
  },
};

export const Loading: Story = {
  args: {
    text: 'Loading',
    loading: true,
  },
};
