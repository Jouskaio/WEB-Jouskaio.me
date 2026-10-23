// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import StatusBadge from './statusBadge';

const meta: Meta<typeof StatusBadge> = {
    title: 'Atom/StatusBadge',
    component: StatusBadge,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A pill with a green dot that tells at first sight what the owner is looking for. It is a link when it has a destination. The dot stops pulsing for visitors who asked for reduced motion, and the text wraps on a narrow screen.',
            },
        },
    },
    args: { children: 'Open to opportunities', detail: 'Permanent or freelance' },
};

export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const Default: Story = {};

export const AsLink: Story = {
    args: { src: '/#contact' },
};

export const OnANarrowScreen: Story = {
    args: { src: '/#contact' },
    render: (args) => (
        <div style={{ width: 220 }}>
            <StatusBadge {...args} />
        </div>
    ),
};
