// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import Media from './media';

const meta: Meta<typeof Media> = {
    title: 'Atom/Media',
    component: Media,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Optimised image with a shimmer placeholder shown while it loads.',
            },
        },
    },
    args: {
        src: '/images/me.png',
        alt: 'Portrait of Manon Salsou',
        width: 320,
        height: 320,
    },
};

export default meta;

type Story = StoryObj<typeof Media>;

export const Default: Story = {};

export const Rounded: Story = {
    args: {
        style: { borderRadius: '50%' },
    },
};
