import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import CardCitation from './cardCitation';
import CardInfos from './cardInfos';
import CardListIcons from './cardListIcons';
import CardListText from './cardListText';
import CardNews from './cardNews';
import CardStatus from './cardStatus';
import CardXL from './cardXL';

const meta = {
    title: 'Molecule/Cards',
    tags: ['ai-generated'],
    parameters: {
        docs: {
            description: {
                component:
                    "Vue d'ensemble des différents composants Card du projet.",
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const citationArgs = {
    urlSource: 'https://blog.jouskaio.me',
    urlPhotoProfile:
        'https://placehold.co/100x100/808080/ffffff?text=JS',
    urlProfile: 'https://blog.jouskaio.me',
    nameProfile: 'Jouska',
    descriptionProfile: 'Développeuse Full Stack',
    children:
        "La technologie est réellement utile lorsqu'elle devient simple à utiliser.",
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const infosArgs = {
    date: '2026-07-19',
    children:
        'Une nouvelle version du site est maintenant disponible.',
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
        {
            icon:
                'https://placehold.co/56x56/61DAFB/111111?text=R',
            title: 'React',
            text: 'Reusable frontend components',
            alt: 'Logo React',
        },
        {
            icon:
                'https://placehold.co/56x56/3178C6/ffffff?text=TS',
            title: 'TypeScript',
            text: 'Typed and maintainable code',
            alt: 'Logo TypeScript',
        },
    ],
    aosDuration: 800,
    aosEffect: 'fade-up',
    intervalDuration: 2500,
};

const listTextArgs = {
    title: 'Compétences',
    media:
        'https://placehold.co/1200x700/27272a/ffffff?text=Compétences',
    details: [
        'Développement Frontend',
        'Développement Backend',
        'Architecture logicielle',
        'Administration système',
    ],
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const newsArgs = {
    article: [
        {
            media:
                'https://placehold.co/800x450/2563eb/ffffff?text=Storybook',
            title: 'Construire un Design System avec Storybook',
            text:
                'Découvrez comment organiser et documenter des composants React réutilisables.',
            url: 'https://blog.jouskaio.me',
            tags: [
                {
                    name: 'Frontend',
                    color: '#2563eb',
                    slug: 'frontend',
                },
                {
                    name: 'Storybook',
                    color: '#7c3aed',
                    slug: 'storybook',
                },
            ],
        },
        {
            media:
                'https://placehold.co/800x450/21759b/ffffff?text=WordPress',
            title: 'Utiliser WordPress comme CMS Headless',
            text:
                'Une introduction à l’utilisation de l’API REST WordPress avec Next.js.',
            url: 'https://blog.jouskaio.me',
            tags: [
                {
                    name: 'WordPress',
                    color: '#21759b',
                    slug: 'wordpress',
                },
            ],
        },
    ],
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const statusArgs = {
    title: 'Projet en ligne',
    text: 'Tous les services fonctionnent normalement.',
    color: '#22c55e',
    aosDuration: 800,
    aosEffect: 'fade-up',
};

const xlArgs = {
    media: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    article: {
        tag: 'Développement web',
        title: 'Créer des expériences numériques utiles',
        text:
            'Conception et développement de produits numériques accessibles, performants et maintenables.',
    },
    aosDuration: 800,
    aosEffect: 'fade-up',
};

export const All: Story = {
    render: () => (
        <>
            <CardCitation
                {...citationArgs}
                style={{
                    width: 420,
                    height: 280,
                }}
            />

            <CardInfos
                {...infosArgs}
                style={{
                    width: 340,
                    minHeight: 180,
                }}
            />

            <CardListIcons
                {...listIconsArgs}
                style={{
                    width: 420,
                    height: 320,
                }}
            />

            <CardListText
                {...listTextArgs}
                style={{
                    width: 500,
                    height: 320,
                }}
            />

            <CardNews
                {...newsArgs}
                style={{
                    width: 420,
                }}
            />

            <CardStatus
                {...statusArgs}
                style={{
                    width: 450,
                    minHeight: 140,
                }}
            />

            <CardXL
                {...xlArgs}
                style={{
                    width: 800,
                    height: 450,
                }}
            />
        </>
    ),
};

export const Citation: Story = {
    render: () => (
        <CardCitation
            {...citationArgs}
            style={{
                width: 420,
                height: 280,
            }}
        />
    ),
};

export const Infos: Story = {
    render: () => (
        <CardInfos
            {...infosArgs}
            style={{
                width: 340,
                minHeight: 180,
            }}
        />
    ),
};

export const ListIcons: Story = {
    render: () => (
        <CardListIcons
            {...listIconsArgs}
            style={{
                width: 420,
                height: 320,
            }}
        />
    ),
};

export const ListText: Story = {
    render: () => (
        <CardListText
            {...listTextArgs}
            style={{
                width: 500,
                height: 320,
            }}
        />
    ),
};

export const News: Story = {
    render: () => (
        <CardNews
            {...newsArgs}
            style={{
                width: 420,
            }}
        />
    ),
};

export const Status: Story = {
    render: () => (
        <CardStatus
            {...statusArgs}
            style={{
                width: 450,
                minHeight: 140,
            }}
        />
    ),
};

export const XL: Story = {
    render: () => (
        <CardXL
            {...xlArgs}
            style={{
                width: 800,
                height: 450,
            }}
        />
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        // Wait for dynamic component to load might be tricky, but we can check the button
        const button = canvas.getByRole('button', { name: /Mettre la vidéo en pause|Lire la vidéo/i });
        expect(button).toBeInTheDocument();
    },
};