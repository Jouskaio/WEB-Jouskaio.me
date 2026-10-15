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
        projects: [
            { name: 'Babel', tagline: 'Library, reading and notes', url: '/work', tags: ['Flutter', 'FastAPI'] },
            { name: 'Toolkit', tagline: 'SSH and server toolkit', url: '/work', tags: ['Bash', 'jq'] },
        ],
        workUrl: '/work',
        resumes: [
            { name: 'CV (français)', url: '/cv/manon-salsou-cv-fr.pdf', lang: 'fr' },
            { name: 'Resume (English)', url: '/cv/manon-salsou-cv-en.pdf', lang: 'en' },
        ],
        email: 'contact@example.com',
        menuClassName: 'l-main__a-moreMenu',
        settingsClassName: 'l-main__a-param',
    },
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {};
