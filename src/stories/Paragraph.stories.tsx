import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from '../components/paragraph';

const meta = {
  title: 'Example/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Paragraph',
    size: 48,
    weight: 900,
  },
};
