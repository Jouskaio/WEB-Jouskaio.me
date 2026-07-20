import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from 'storybook/test';

import Email from './email';

const meta = {
    title: 'Organism/Interaction',
    component: Email,
    tags: ['ai-generated'],
    parameters: {
        docs: {
            description: {
                component:
                    "Vue d'ensemble des composants d’interaction du projet.",
            },
        },
    },
} satisfies Meta<typeof Email>;

export default meta;

type Story = StoryObj<typeof Email>;

const baseArgs = {
    url: 'https://example.com',
    className: '',
    alert: (message: string) => {
        console.log('Alert from component:', message);
    },
};

export const All: Story = {
    args: baseArgs,
};

export const EmailComponent: Story = {
    args: baseArgs,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.type(canvas.getByLabelText(/Your name/i), 'John Doe');
        await userEvent.type(canvas.getByLabelText(/Email/i), 'john@example.com');
        await userEvent.type(canvas.getByLabelText(/Title/i), 'Hello');
        await userEvent.type(canvas.getByLabelText(/Message/i), 'This is a test message');

        await userEvent.click(canvas.getByRole('button', { name: /Send the message/i }));

        const status = await canvas.findByText('Email sent successfully');
        expect(status).toBeInTheDocument();
    },
};

export const WithAnimation: Story = {
    args: {
        ...baseArgs,
        aosEffect: 'fade-up',
        aosDuration: 1000,
    },
};
