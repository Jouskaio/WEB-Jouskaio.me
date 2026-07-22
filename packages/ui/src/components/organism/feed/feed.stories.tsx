import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import Link from 'next/link';

import Feed from './feed';
import FeedLatest from "./feedLastest";

const meta = {
    title: 'Organism/Feed',
    component: Feed,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    "Feed of articles and projects using a grid layout (Pinterest-like).",
            },
        },
    },
} satisfies Meta<typeof Feed>;


export default meta;

type Story = StoryObj<typeof Feed>;

const mockPins = [
    {
        title: 'Building a Design System with Storybook',
        text: 'Create a consistent, reusable, and documented component library.',
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
        title: 'Headless WordPress and Next.js',
        text: 'Using WordPress as a Headless CMS to power a modern application.',
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
        title: 'Frontend performance and interface design',
        text: 'A few best practices to keep an interface fast and pleasant to use.',
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

export const StandardFeed: Story = {
    args: {
        pins: mockPins,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const pinTitle = canvas.getByText('Building a Design System with Storybook');
        expect(pinTitle).toBeInTheDocument();
    },
};

export const LatestFeed: StoryObj<typeof FeedLatest> = {
    render: (args) => <FeedLatest {...args} />,
    args: {
        pins: mockPins,
    },
};

export const FullBlogFeed: Story = {
    render: () => <FeedArticlesStaticPreview />,
};
