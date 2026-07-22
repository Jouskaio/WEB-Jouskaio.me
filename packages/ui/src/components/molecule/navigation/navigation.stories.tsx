import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import Alert from './alert';
import NavCategories from "./categories";

const meta = {
    title: 'Molecule/Navigation',
    component: Alert,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    "Secondary navigation and user feedback components (alerts, categories).",
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '24px', background: '#f9f9f9', minHeight: '100px', position: 'relative' }}>
                {/* Force relative position for the alert in Storybook so it doesn't escape the container */}
                <style>{`
                    .m-alert { 
                        position: relative !important; 
                        bottom: auto !important; 
                        left: auto !important;
                        z-index: 1 !important;
                    }
                `}</style>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Alert>;


export default meta;

type Story = StoryObj<typeof Alert>;

const mockCategories = [
    { name: 'Frontend', slug: 'frontend' },
    { name: 'Storybook', slug: 'storybook' },
    { name: 'Design', slug: 'design' },
    { name: 'React', slug: 'react' },
];

export const AlertComponent: Story = {
    args: {
        children: 'This is an information alert displayed in the design system.',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const alertText = canvas.getByText(/This is an alert/);
        expect(alertText).toBeInTheDocument();
    },
};

export const CategoriesComponent: StoryObj<typeof NavCategories> = {
    render: (args) => (
        <div style={{ maxWidth: 700, padding: '24px' }}>
            <NavCategories {...args} />
        </div>
    ),
    args: {
        width: "100%",
        categories: mockCategories,
    },
    argTypes: {
        width: {
            control: 'text',
        },
        categories: {
            control: 'object',
        },
    },
};
