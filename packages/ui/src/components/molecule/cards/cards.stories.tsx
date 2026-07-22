import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import CardCitation from './cardCitation';
import CardExperience from './cardExperience';
import CardInfos from './cardInfos';
import CardListIcons from './cardListIcons';
import CardListText from './cardListText';
import CardNews from './cardNews';
import CardStatus from './cardStatus';
import CardXL from './cardXL';

const meta = {
    title: 'Molecule/Cards',
    component: CardCitation,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    "Collection of cards used to display citations, information, projects (XL), or blog articles.",
            },
        },
    },
} satisfies Meta<typeof CardCitation>;

export default meta;

type Story = StoryObj<typeof meta>;

const citationArgs = {
    urlSource: 'https://blog.jouskaio.me',
    urlPhotoProfile:
        'https://placehold.co/100x100/808080/ffffff?text=JS',
    urlProfile: 'https://blog.jouskaio.me',
    nameProfile: 'Jouska',
    descriptionProfile: 'Full Stack Developer',
    children:
        "Technology is truly useful when it becomes simple to use.",
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const experienceArgs = {
    title: 'Lead Mobile Developer',
    company: 'Innovatech Studio',
    period: 'Jan 2022 - Present',
    description: 'Leading the development of cross-platform mobile applications using React Native and Flutter. Improved application performance by 40% and mentored a team of 5 junior developers.',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Redux'],
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const infosArgs = {
    date: '2026-07-19',
    children:
        'A new version of the website is now available.',
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const listIconsArgs = {
    icons: [
        {
            icon:
                'https://placehold.co/56x56/E34F26/ffffff?text=H5',
            title: 'HTML 5',
            text: 'Website from scratch',
            alt: 'Logo HTML 5',
        },
        {
            icon:
                'https://placehold.co/56x56/1572B6/ffffff?text=CSS',
            title: 'CSS 3',
            text: 'Responsive and modern layouts',
            alt: 'Logo CSS 3',
        },
        {
            icon:
                'https://placehold.co/56x56/F7DF1E/111111?text=JS',
            title: 'JavaScript',
            text: 'Interactive web experiences',
            alt: 'Logo JavaScript',
        },
    ],
    aosDuration: 800,
    aosEffect: 'fade-up',
    intervalDuration: 2500,
};

const listTextArgs = {
    title: 'Skills',
    media:
        'https://placehold.co/1200x700/27272a/ffffff?text=Skills',
    details: [
        'Frontend Development',
        'Backend Development',
        'Software Architecture',
    ],
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const newsArgs = {
    article: [
        {
            media:
                'https://placehold.co/800x450/2563eb/ffffff?text=Storybook',
            title: 'Building a Design System with Storybook',
            text:
                'Discover how to organize and document reusable React components.',
            url: 'https://blog.jouskaio.me',
            tags: [
                {
                    name: 'Frontend',
                    color: '#2563eb',
                    slug: 'frontend',
                },
            ],
        },
    ],
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const statusArgs = {
    title: 'Project online',
    text: 'All services are working normally.',
    color: '#22c55e',
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const xlArgs = {
    media: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    article: {
        tag: 'Web Development',
        title: 'Creating useful digital experiences',
        text:
            'Design and development of accessible, high-performance, and maintainable digital products.',
    },
    aosDuration: 800,
    aosEffect: 'fade-up',
};

export const Citation: StoryObj<typeof CardCitation> = {
    render: (args) => <CardCitation {...args} style={{ width: 420 }} />,
    args: citationArgs,
};

export const Experience: StoryObj<typeof CardExperience> = {
    render: (args) => <CardExperience {...args} style={{ width: 500 }} />,
    args: experienceArgs,
};

export const Infos: StoryObj<typeof CardInfos> = {
    render: (args) => <CardInfos {...args} style={{ width: 340 }} />,
    args: infosArgs,
};

export const ListIcons: StoryObj<typeof CardListIcons> = {
    render: (args) => <CardListIcons {...args} style={{ width: 420, height: 320 }} />,
    args: listIconsArgs,
};

export const ListText: StoryObj<typeof CardListText> = {
    render: (args) => <CardListText {...args} style={{ width: 500 }} />,
    args: listTextArgs,
};

export const News: StoryObj<typeof CardNews> = {
    render: (args) => <CardNews {...args} style={{ width: 420 }} />,
    args: newsArgs,
};

export const Status: StoryObj<typeof CardStatus> = {
    render: (args) => <CardStatus {...args} style={{ width: 450 }} />,
    args: statusArgs,
};

export const XL: StoryObj<typeof CardXL> = {
    render: (args) => <CardXL {...args} style={{ width: 800, height: 450 }} />,
    args: xlArgs,
    argTypes: {
        media: {
            control: 'text',
            description: 'Media URL (YouTube video, Vimeo, MP4, etc.)',
        },
        article: {
            control: 'object',
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: /Pause video|Play video/i });
        expect(button).toBeInTheDocument();
    },
};