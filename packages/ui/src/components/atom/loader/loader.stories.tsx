// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Loader from './loader';

const meta: Meta<typeof Loader> = {
    title: 'Atom/Loader',
    component: Loader,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A ring in the accent color and a label, shown while a video or a page is loading. The ring stops spinning for visitors who asked for reduced motion.',
            },
        },
    },
    args: { label: 'Loading' },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const Video: Story = {
    args: { label: 'Loading video' },
};

export const LabelForScreenReadersOnly: Story = {
    args: { label: 'Loading', hideLabel: true },
};
