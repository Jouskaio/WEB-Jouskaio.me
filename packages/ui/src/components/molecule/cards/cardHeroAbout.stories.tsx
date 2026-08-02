import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardHeroAbout from './cardHeroAbout';
 
const meta = {
    title: 'Molecule/Cards/HeroAbout',
    component: CardHeroAbout,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "Hero card for the About page with a responsive image.",
            },
        },
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CardHeroAbout>;
 
export default meta;
 
type Story = StoryObj<typeof CardHeroAbout>;

export const Default: Story = {
    args: {
        title: 'About Me',
        subtitle: 'Engineering thoughtful technology across software, connected systems, and immersive experiences.',
        introTitle: "Hi, I’m Manon.",
        introText: "I’m a software engineer with a multidisciplinary background spanning embedded systems, IoT, mobile and web development, AR, and cybersecurity. My work lives at the intersection of technology, product thinking, and real-world problem solving. I’m especially drawn to projects that connect software and physical environments — from connected devices and cloud-backed systems to immersive mobile experiences and secure digital infrastructures.",
        imageSrc: '/images/me.png',
        imageAlt: 'Manon',
    },
};
