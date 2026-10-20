// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import ExperienceTimeline from './experienceTimeline';

const meta: Meta<typeof ExperienceTimeline> = {
    title: 'Organism/ExperienceTimeline',
    component: ExperienceTimeline,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'A list of experiences linked by a vertical line: the year on the left, a dot on the line and the card on the right. On a narrow screen the years are hidden and the line stays on the side.',
            },
        },
    },
    args: {
        items: [
            {
                year: '2024',
                title: 'Cybersecurity Engineering',
                company: 'Armed forces Ministry',
                period: '2024 — Present',
                description:
                    'I work on cybersecurity-related topics with a systems-oriented mindset shaped by software engineering, connected infrastructures, and operational realities.',
                technologies: ['Cybersecurity', 'Systems', 'Infrastructures'],
                logoUrl: '/icons/army.jpeg',
            },
            {
                year: '2021',
                title: 'IoT Test Manager',
                company: 'RATP Group',
                period: '2021 — 2024',
                description:
                    'I contributed to large-scale IoT experimentation projects focused on monitoring physical parameters across infrastructure environments.',
                technologies: ['IoT', 'Sensors', 'SaaS', 'Cloud computing'],
                logoUrl: '/icons/RATP.svg',
            },
            {
                year: '2019',
                title: 'Software Applications Assistant',
                company: 'Santarelli',
                period: '2019',
                description: 'I worked on a tool designed to digitize customer invoices.',
                technologies: ['Software Development', 'Process Automation'],
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ExperienceTimeline>;

export const Default: Story = {};
