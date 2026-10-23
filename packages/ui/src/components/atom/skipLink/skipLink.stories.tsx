// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SkipLink, { SkipLinkTarget } from './skipLink';

const meta: Meta<typeof SkipLink> = {
    title: 'Atom/SkipLink',
    component: SkipLink,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'The first link of a page for keyboard users. It is invisible until it receives the focus (press Tab), then jumps over the header and the menu to the content. Put the SkipLinkTarget where the content starts.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
    render: () => (
        <div style={{ minHeight: 160 }}>
            <SkipLink />
            <p>Click here, then press Tab: the link appears at the top left.</p>
            <SkipLinkTarget />
        </div>
    ),
};

export const CustomText: Story = {
    render: () => (
        <div style={{ minHeight: 160 }}>
            <SkipLink>Aller au contenu</SkipLink>
            <p>Click here, then press Tab.</p>
            <SkipLinkTarget />
        </div>
    ),
};
