// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import Link from 'next/link';

import Feed from './feed';
import FeedLatest from "./feedLastest";

const meta = {
    title: 'Organism/Feed',
    component: Feed,
    parameters: {
        docs: {
            description: {
                component:
                    "Vue d'ensemble visuelle des composants du dossier feed.",
            },
        },
    },
} satisfies Meta<typeof Feed>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockPins = [
    {
        title: 'Construire un Design System avec Storybook',
        text: 'Créer une bibliothèque de composants cohérente, réutilisable et documentée.',
        media: 'https://placehold.co/600x400/2563eb/ffffff?text=Design+System',
        url: 'https://blog.jouskaio.me',
        size: 'small' as const,
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
    },
    {
        title: 'WordPress Headless et Next.js',
        text: 'Utiliser WordPress comme CMS Headless pour alimenter une application moderne.',
        media: 'https://placehold.co/600x400/21759b/ffffff?text=WP+Headless',
        url: 'https://blog.jouskaio.me',
        size: 'medium' as const,
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
    },
    {
        title: 'Performance frontend et design d’interface',
        text: 'Quelques bonnes pratiques pour garder une interface rapide et agréable à utiliser.',
        media: 'https://placehold.co/600x400/7c3aed/ffffff?text=Performance',
        url: 'https://blog.jouskaio.me',
        size: 'large' as const,
        tags: [
            {
                name: 'Performance',
                color: '#7c3aed',
                slug: 'performance',
            },
        ],
    },
];

function FeedArticlesStaticPreview() {
    return (
        <div>
            <div className="l-blog__m-categories">
                <ul className="l-blog__m-categoriesUl">
                    <li>
                        <Link href="/blog/category/frontend" legacyBehavior>
                            <a>Frontend</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/category/storybook" legacyBehavior>
                            <a>Storybook</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/category/design" legacyBehavior>
                            <a>Design</a>
                        </Link>
                    </li>
                    <li className="m-categories__a-all">
                        <Link href="/blog/category" legacyBehavior>
                            <a>all</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <Feed pins={mockPins} />
        </div>
    );
}

export const All: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '64px' }}>
            <section>
                <Feed pins={mockPins} />
            </section>

            <section>
                <FeedLatest pins={mockPins} />
            </section>

            <section>
                <FeedArticlesStaticPreview />
            </section>
        </div>
    ),
};

export const FeedComponent: Story = {
    render: () => <Feed pins={mockPins} />,
};

export const FeedLatestComponent: Story = {
    render: () => <FeedLatest pins={mockPins} />,
};

export const FeedArticlesVisual: Story = {
    render: () => <FeedArticlesStaticPreview />,
};
