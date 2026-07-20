// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';

import Pin from './pin';
import PinNews from './pinNews';
const meta = {
    title: 'Molecule/Feed',
    tags: ['!autodocs'],
    parameters: {
        docs: {
            description: {
                component: "Overview of Feed-type components.",
            },
        },
    },
} satisfies Meta;


export default meta;

type Story = StoryObj<typeof meta>;

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

export const All: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '48px' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 320px)',
                    gridAutoRows: '6px',
                    justifyContent: 'start',
                }}
            >
                <Pin {...pinArgs} size="small" />
                <Pin {...pinArgs} size="medium" />
                <Pin {...pinArgs} size="large" />
            </div>

            <div style={{ maxWidth: 720 }}>
                <PinNews {...pinNewsArgs} />
            </div>
        </div>
    ),
};

export const PinComponent: Story = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '320px',
                gridAutoRows: '6px',
                justifyContent: 'start',
            }}
        >
            <Pin {...pinArgs} />
        </div>
    ),
};

export const PinNewsComponent: Story = {
    render: () => (
        <div style={{ maxWidth: 720 }}>
            <PinNews {...pinNewsArgs} />
        </div>
    ),
};
