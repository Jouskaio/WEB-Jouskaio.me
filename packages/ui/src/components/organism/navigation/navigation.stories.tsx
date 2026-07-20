import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import Footer from './footer';
import Header from './header';

const meta = {
    title: 'Organism/Navigation',
    tags: ['ai-generated'],
    parameters: {
        docs: {
            description: {
                component:
                    "Overview of the navigation components at the organism level.",
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const mockPages = [
    {
        source: '/',
        class: 'o-header__page',
        name: 'home.',
    },
    {
        source: '/works',
        class: 'o-header__page',
        name: 'work.',
    },
    {
        source: '/blog',
        class: 'o-header__page',
        name: 'blog.',
    },
    {
        source: '/contact',
        class: 'o-header__page',
        name: 'contact.',
    },
];


export const All: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '64px', padding: '24px' }}>
            <Header pages={mockPages} />
            <Footer />
        </div>
    ),
};

export const HeaderComponent: Story = {
    render: () => (
        <div style={{ padding: '24px' }}>
            <Header pages={mockPages} />
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const homeLink = canvas.getByText('home.');
        expect(homeLink).toBeInTheDocument();
    },
};

export const FooterComponent: Story = {
    render: () => (
        <div style={{ padding: '24px' }}>
            <Footer />
        </div>
    ),
};
