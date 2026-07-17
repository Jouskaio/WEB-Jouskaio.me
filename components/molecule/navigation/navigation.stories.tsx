// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';

import Alert from './alert';
import NavCategories from "./categories";

const meta = {
    title: 'Molecule/Navigation',
    parameters: {
        docs: {
            description: {
                component:
                    "Vue d'ensemble des composants de navigation et d’alerte.",
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
