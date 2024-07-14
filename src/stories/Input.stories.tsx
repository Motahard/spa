import type { Meta, StoryObj } from '@storybook/react';

import { InputComponent } from '../components/input';

const meta = {
  title: 'Example/Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 48,
    placeholder: 'Primary Input'
  },
};

export const WithMask: Story = {
  args: {
    size: 48,
    placeholder: 'WithMask Input',
    mask: '999.999.999'
  },
};
