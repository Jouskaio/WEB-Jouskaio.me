// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Chip from './chip';

const meta: Meta<typeof Chip> = {
    title: 'Atom/Chip',
    component: Chip,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A small rounded label for a skill, a technology or a keyword. It follows the text color, so it works on a page and on a glass card, in every theme.',
            },
        },
    },
    args: { children: 'Docker' },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const InAList: Story = {
    render: () => (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: 0, padding: 0, listStyle: 'none' }}>
            {['Flutter', 'FastAPI', 'Dart', 'Python', 'OpenAPI'].map((chip) => (
                <li key={chip}>
                    <Chip>{chip}</Chip>
                </li>
            ))}
        </ul>
    ),
};
