// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Skeleton from './skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Atom/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A grey shape with a soft light sweeping over it, shown in place of the content while it loads. It is hidden from screen readers, so put a status text next to a group of skeletons. The sweep stops for visitors who asked for reduced motion.',
            },
        },
    },
    args: { variant: 'text' },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {};

export const Title: Story = { args: { variant: 'title' } };

export const Image: Story = { args: { variant: 'image' } };

export const AnArticle: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, width: 420 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Skeleton variant="title" />
                <Skeleton />
                <Skeleton width="90%" />
                <Skeleton width="60%" />
            </div>
            <Skeleton variant="image" />
        </div>
    ),
};
