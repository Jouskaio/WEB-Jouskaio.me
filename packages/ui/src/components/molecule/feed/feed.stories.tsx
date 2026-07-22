// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';

import Pin from './pin';
import PinNews from './pinNews';
const meta = {
    title: 'Molecule/Feed',
    component: Pin,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "Core components for the feed (Pinterest-like) and news articles.",
            },
        },
    },
} satisfies Meta<typeof Pin>;


export default meta;

type Story = StoryObj<typeof Pin>;

const pinArgs = {
    size: 'medium' as const,
    title: 'Building a Design System with Storybook',
    text: 'Create a consistent, reusable, and documented component library.',
    media: 'https://placehold.co/600x400/2563eb/ffffff?text=Design+System',
    url: 'https://blog.jouskaio.me',
    tags: [
        {
            name: 'Frontend',
            color: '#2563eb',
            slug: 'frontend',
        },
        {
            name: 'Storybook',
            color: '#ff4785',
            slug: 'storybook',
        },
    ],
    style: {
        width: 320,
    },
};

const pinNewsArgs = {
    title: 'WordPress and Next.js',
    text: '<p>Using WordPress as a Headless CMS to power a Next.js application.</p>',
    media: 'https://placehold.co/200x110/21759b/ffffff?text=WP',
    url: 'headless-wordpress',
    tags: [
        {
            name: 'WordPress',
            color: '#21759b',
            slug: 'wordpress',
        },
        {
            name: 'Next.js',
            color: '#000000',
            slug: 'nextjs',
        },
    ],
    style: {
        width: 600,
    },
};

export const PinSmall: Story = {
    args: { ...pinArgs, size: 'small' },
};

export const PinMedium: Story = {
    args: { ...pinArgs, size: 'medium' },
};

export const PinLarge: Story = {
    args: { ...pinArgs, size: 'large' },
};

export const PinNewsComponent: StoryObj<typeof PinNews> = {
    render: (args) => (
        <div style={{ maxWidth: 720 }}>
            <PinNews {...args} />
        </div>
    ),
    args: pinNewsArgs,
};
