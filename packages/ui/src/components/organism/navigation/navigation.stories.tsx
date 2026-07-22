import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import Footer from './footer';
import Header from './header';

const meta = {
    title: 'Organism/Navigation',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    "Main navigation components of the portfolio: Header (menu) and Footer.",
            },
        },
    },
    argTypes: {
        pages: {
            control: 'object',
            description: 'List of navigation links',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ minHeight: '300px', position: 'relative', border: '1px dashed #ccc', padding: '20px', background: '#333' }}>
                {/* Force absolute position for the header in Storybook so it stays within the story frame */}
                <style>{`
                    .o-header { 
                        position: absolute !important; 
                        bottom: 20px !important; 
                        left: 50% !important;
                        transform: translateX(-50%) !important;
                        width: 90% !important;
                    }
                `}</style>
                <Story />
                <div style={{ height: '150px' }} />
            </div>
        ),
    ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

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

export const HeaderOnly: Story = {
    args: {
        pages: mockPages,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const homeLink = canvas.getByText('home.');
        expect(homeLink).toBeInTheDocument();
    },
};

export const FooterOnly: StoryObj<typeof Footer> = {
    render: (args) => <Footer {...args} />,
    args: {
        classname: '',
    },
};

export const Combined: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', justifyContent: 'space-between' }}>
            <Header {...args} />
            <Footer />
        </div>
    ),
    args: {
        pages: mockPages,
    },
};
