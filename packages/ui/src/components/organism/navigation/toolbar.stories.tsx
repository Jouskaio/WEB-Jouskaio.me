// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import Toolbar from './toolbar';

const meta: Meta<typeof Toolbar> = {
    title: 'Organism/Toolbar',
    component: Toolbar,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'The two round buttons of the page: quick navigation and display settings. Each opens its dialog; the settings are saved in the browser.',
            },
        },
    },
    args: {
        pages: [
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
            { name: 'Work', url: '/work' },
        ],
        contacts: [{ name: 'GitHub', url: 'https://github.com/Jouskaio' }],
        email: 'contact@example.com',
        menuClassName: 'l-main__a-moreMenu',
        settingsClassName: 'l-main__a-param',
    },
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {};
