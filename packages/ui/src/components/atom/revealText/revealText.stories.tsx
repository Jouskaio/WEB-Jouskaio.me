// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import RevealText from './revealText';
import TextH1 from '../text/textH1';

const meta: Meta<typeof RevealText> = {
    title: 'Atom/RevealText',
    component: RevealText,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A title whose words rise and appear one after the other when it is shown. The text is there only once, as plain words, so screen readers read it as usual. The words show without any movement for visitors who asked for reduced motion.',
            },
        },
    },
    args: { children: 'Manon Salsou' },
};

export default meta;

type Story = StoryObj<typeof RevealText>;

export const Default: Story = {
    render: (args) => (
        <TextH1>
            <RevealText {...args} />
        </TextH1>
    ),
};

export const LongTitle: Story = {
    args: { children: 'Engineering thoughtful technology across software and connected systems' },
    render: (args) => (
        <div style={{ maxWidth: 520 }}>
            <TextH1>
                <RevealText {...args} />
            </TextH1>
        </div>
    ),
};
