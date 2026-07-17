// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';

const meta: Meta<typeof Icon> = {
    title: 'Atom/Icon',
    component: Icon,
    args: {
        href: '/',
        src: '/public/icons/github.png',
        classname: '',
        alt: 'GitHub',
        id: 'github-icon',
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Github: Story = {
    args: {
        href: 'https://github.com',
        src: '/public/icons/github.png',
        alt: 'GitHub',
        id: 'github-icon',
    },
};

export const Instagram: Story = {
    args: {
        href: 'https://instagram.com',
        src: '/public/icons/instagram.png',
        alt: 'Instagram',
        id: 'instagram-icon',
    },
};
