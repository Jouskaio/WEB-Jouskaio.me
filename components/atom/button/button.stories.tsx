// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
    title: 'Atom/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        src: '/',
        classname: '',
        children: 'Mon bouton',
    },
};

export const Primary: Story = {
    args: {
        src: '/',
        classname: 'primary',
        children: 'Bouton primary',
    },
};
