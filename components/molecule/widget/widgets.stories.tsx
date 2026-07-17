// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import WidgetContact from "./contact/widgetContact";

const meta = {
    title: 'Molecule/Widgets',
    component: WidgetContact,
    parameters: {
        docs: {
            description: {
                component: "Vue d'ensemble des widgets du projet.",
            },
        },
    },
} satisfies Meta<typeof WidgetContact>;

export default meta;

type Story = StoryObj<typeof WidgetContact>;

const contactArgs = {
    children: 'Me contacter',
    contacts: [
        {
            name: 'Email',
            url: 'mailto:hello@jouskaio.me',
            description: 'Envoie-moi un email pour discuter d’un projet ou poser une question.',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com',
            description: 'Retrouve-moi sur LinkedIn pour échanger autour du design et du web.',
        },
        {
            name: 'GitHub',
            url: 'https://github.com',
            description: 'Consulte mes repositories et mes expérimentations techniques.',
        },
    ],
    classname: '',
};

export const All: Story = {
    args: contactArgs,
};

export const WidgetContactComponent: Story = {
    args: contactArgs,
};

export const TwoContacts: Story = {
    args: {
        ...contactArgs,
        contacts: [
            {
                name: 'Email',
                url: 'mailto:hello@jouskaio.me',
                description: 'Privilégie ce canal pour les demandes de mission.',
            },
            {
                name: 'Discord',
                url: 'https://discord.com',
                description: 'Disponible aussi sur Discord pour discuter plus rapidement.',
            },
        ],
    },
};

export const SingleContact: Story = {
    args: {
        ...contactArgs,
        contacts: [
            {
                name: 'Email',
                url: 'mailto:hello@jouskaio.me',
                description: 'Un seul mode de contact disponible ici.',
            },
        ],
    },
};
