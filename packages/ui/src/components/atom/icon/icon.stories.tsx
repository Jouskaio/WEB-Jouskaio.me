import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import Icon from './icon';

const meta: Meta<typeof Icon> = {
    title: 'Atom/Icon',
    component: Icon,
    tags: ['autodocs'],
    args: {
        href: '/',
        src: '/icons/github.png',
        classname: '',
        alt: 'Icon',
        id: 'icon',
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Github: Story = {
    args: {
        href: 'https://github.com/Jouskaio',
        src: '/icons/github.png',
        alt: 'GitHub',
        id: 'github-icon',
    },
};

export const LinkedIn: Story = {
    args: {
        href: 'https://www.linkedin.com',
        src: '/icons/linkedin.png',
        alt: 'LinkedIn',
        id: 'linkedin-icon',
    },
};

export const Spotify: Story = {
    args: {
        href: 'https://spotify.com',
        src: '/icons/spotify.png',
        alt: 'Spotify',
        id: 'spotify-icon',
    },
};
