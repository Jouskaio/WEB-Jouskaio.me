// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';

import Email from './email';

const meta = {
    title: 'Organism/Interaction',
    component: Email,
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
};

export const WithAnimation: Story = {
    args: {
        ...baseArgs,
        aosEffect: 'fade-up',
        aosDuration: 1000,
    },
};
