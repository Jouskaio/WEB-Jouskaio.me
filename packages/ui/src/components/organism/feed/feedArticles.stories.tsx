import type { Meta, StoryObj } from '@storybook/react';

import FeedArticles from './feedArticles';

const meta = {
    title: 'Organism/FeedArticles',
    component: FeedArticles,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Article feed with infinite scroll. The articles come from the `Articles` GraphQL query, mocked here by MSW (see `.storybook/msw-handlers.ts`).',
            },
        },
    },
} satisfies Meta<typeof FeedArticles>;

export default meta;

type Story = StoryObj<typeof FeedArticles>;

export const Default: Story = {};
