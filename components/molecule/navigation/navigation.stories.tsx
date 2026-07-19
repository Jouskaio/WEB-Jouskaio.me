import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import Alert from './alert';
import NavCategories from "./categories";

const meta = {
    title: 'Molecule/Navigation',
    tags: ['ai-generated', 'needs-work'],
    parameters: {
        docs: {
            description: {
                component:
                    "Overview of navigation and alert components.",
            },
        },
    },
} satisfies Meta;


export default meta;

type Story = StoryObj<typeof meta>;

const wrapperStyle = {
    display: 'grid',
    gap: '40px',
    padding: '24px',
};

const sectionStyle = {
    display: 'grid',
    gap: '16px',
};

const mockCategories = [
    { name: 'Frontend', slug: 'frontend' },
    { name: 'Storybook', slug: 'storybook' },
    { name: 'Design', slug: 'design' },
    { name: 'React', slug: 'react' },
];

export const All: Story = {
    render: () => (
        <div style={wrapperStyle}>
            <section style={sectionStyle}>
                <Alert>
                    Ceci est une alerte d’information affichée dans le design system.
                </Alert>
            </section>

            <section style={sectionStyle}>
                <NavCategories
                    width={600}
                    classname=""
                    categories={mockCategories}
                />
            </section>
        </div>
    ),
};

export const AlertComponent: Story = {
    render: () => (
        <div style={{ maxWidth: 600, padding: '24px' }}>
            <Alert>
                Ceci est une alerte d’information affichée dans le design system.
            </Alert>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const alertText = canvas.getByText(/Ceci est une alerte/);
        expect(alertText).toBeInTheDocument();
    },
};

export const CategoriesComponent: Story = {
    render: () => (
        <div style={{ maxWidth: 700, padding: '24px' }}>
            <NavCategories
                width="100%"
                classname=""
                categories={mockCategories}
            />
        </div>
    ),
};
