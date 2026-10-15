// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import QuickNav from './quickNav';

const meta: Meta<typeof QuickNav> = {
    title: 'Organism/QuickNav',
    component: QuickNav,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Menu: the case studies, ways to get in touch (email, CV to download), the social networks and a way back to the top.',
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
    },
};

export default meta;

type Story = StoryObj<typeof QuickNav>;

export const Default: Story = {};
