// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import QuickNav from './quickNav';

const meta: Meta<typeof QuickNav> = {
    title: 'Organism/QuickNav',
    component: QuickNav,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Quick navigation: the sections of the page (elements with an `id` and a `data-quicknav` label), the pages, ways to get in touch and a way back to the top.',
            },
        },
    },
    args: {
        pages: [
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
            { name: 'Work', url: '/work' },
            { name: 'Blog', url: 'https://blog.jouskaio.me' },
        ],
        contacts: [
            { name: 'GitHub', url: 'https://github.com/Jouskaio' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manonsalsou/' },
        ],
        email: 'contact@example.com',
    },
    decorators: [
        (Story) => (
            <>
                {/* The sections of the "page", found by the navigation through data-quicknav */}
                <section id="intro" data-quicknav="Introduction" />
                <section id="skills" data-quicknav="Skills" />
                <section id="contact" data-quicknav="Contact" />
                <Story />
            </>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof QuickNav>;

export const Default: Story = {};
