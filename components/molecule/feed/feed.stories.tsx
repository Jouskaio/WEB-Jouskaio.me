// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';

import Pin from './pin';
import PinNews from './pinNews';

const meta = {
    title: 'Molecule/Feed',
    parameters: {
        docs: {
            description: {
                component: "Vue d'ensemble des composants de type Feed.",
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const pinArgs = {
    size: 'medium' as const,
    title: 'Construire un Design System avec Storybook',
    text: 'Créer une bibliothèque de composants cohérente, réutilisable et documentée.',
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
    title: 'WordPress et Next.js',
    text: '<p>Utiliser WordPress comme CMS Headless afin d’alimenter une application Next.js.</p>',
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
