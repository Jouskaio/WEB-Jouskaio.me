import React from 'react';
import type { Meta, StoryObj } from 'storybook';
import { expect, within } from 'storybook/test';
import Button from './button';

const meta = {
    title: 'Atom/Button',
    component: Button,
    tags: ['ai-generated', 'autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Primary button component used for navigation and call-to-action links.',
            },
        },
    },
    argTypes: {
        src: {
            description: 'Destination URL used by the button link.',
            control: 'text',
        },
        classname: {
            description: 'Optional extra CSS class names.',
            control: 'text',
        },
        children: {
            description: 'Button label content.',
            control: 'text',
        },
        onClick: {
            description: 'Optional click handler.',
            action: 'clicked',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: '/',
        classname: '',
        children: 'My button',
    },
};

export const Primary: Story = {
    args: {
        src: '/',
        classname: 'primary',
        children: 'Primary button',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByText('Primary button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('href', '/');
    },
};
