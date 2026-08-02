import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import WidgetContact from "./contact/widgetContact";

const meta = {
    title: 'Molecule/Widgets',
    component: WidgetContact,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "Interactive widgets, such as the contact list.",
            },
        },
    },
} satisfies Meta<typeof WidgetContact>;


export default meta;

type Story = StoryObj<typeof WidgetContact>;

const contactArgs = {
    children: 'Contact me',
    contacts: [
        {
            name: 'Email',
            url: 'mailto:hello@jouskaio.me',
            description: 'Send me an email to discuss a project or ask a question.',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com',
            description: 'Find me on LinkedIn to chat about design and the web.',
        },
        {
            name: 'GitHub',
            url: 'https://github.com',
            description: 'Check out my repositories and technical experiments.',
        },
    ],
    classname: '',
};

export const ContactList: Story = {
    args: contactArgs,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const emailContact = canvas.getByText('Email');
        expect(emailContact).toBeInTheDocument();
    },
};

export const TwoContacts: Story = {
    args: {
        ...contactArgs,
        contacts: [
            {
                name: 'Email',
                url: 'mailto:hello@jouskaio.me',
                description: 'Prefer this channel for mission requests.',
            },
            {
                name: 'Discord',
                url: 'https://discord.com',
                description: 'Also available on Discord for quicker conversations.',
            },
        ],
    },
};

