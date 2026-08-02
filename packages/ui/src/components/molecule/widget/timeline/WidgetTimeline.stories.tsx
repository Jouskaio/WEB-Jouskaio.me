import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WidgetTimeline from "./WidgetTimeline";

const meta = {
    title: 'Molecule/Widgets/Timeline',
    component: WidgetTimeline,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "A vertical timeline that displays years and labels with proportional spacing.",
            },
        },
    },
} satisfies Meta<typeof WidgetTimeline>;

export default meta;

type Story = StoryObj<typeof WidgetTimeline>;

export const Default: Story = {
    args: {
        items: [
            { year: 2024, label: 'Systems Focus', isCurrent: true },
            { year: 2021, label: 'RATP Group' },
            { year: 2020, label: 'Novae Memorae' },
            { year: 2019, label: 'Santarelli' },
        ],
        gapMultiplier: 40,
        aosDuration: 800,
        aosEffect: 'fade-up',
    },
};

export const LargeGaps: Story = {
    args: {
        items: [
            { year: 2024, label: 'Future' },
            { year: 2020, label: 'Past' },
            { year: 2010, label: 'Old times' },
        ],
        gapMultiplier: 20,
    },
};
