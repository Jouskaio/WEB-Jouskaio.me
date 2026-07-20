import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import Icon from './icon';

const meta: Meta<typeof Icon> = {
    title: 'Atom/Icon',
    component: Icon,
    tags: ['ai-generated'],
    args: {
        href: '/',
        src: '/icons/github.png',
        classname: '',
        alt: 'GitHub',
        id: 'github-icon',
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const icon = canvas.getByAltText('GitHub');
        expect(icon).toBeInTheDocument();
    },
};

export const Github: Story = {
    args: {
        href: 'https://github.com',
        src: '/icons/github.png',
        alt: 'GitHub',
        id: 'github-icon',
    },
};

export const Instagram: Story = {
    args: {
        href: 'https://instagram.com',
        src: '/icons/instagram.png',
        alt: 'Instagram',
        id: 'instagram-icon',
    },
};
