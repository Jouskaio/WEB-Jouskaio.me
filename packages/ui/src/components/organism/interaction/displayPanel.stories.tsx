// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import DisplayPanel from './displayPanel';
import { DEFAULT_DISPLAY_SETTINGS, type DisplaySettings } from '../../../lib/accessibility/displaySettings';

const meta: Meta<typeof DisplayPanel> = {
    title: 'Organism/DisplayPanel',
    component: DisplayPanel,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Form of the display and accessibility settings. It only renders the choices: in the site, `useDisplaySettings` keeps them and applies them to the page. Use the Storybook toolbar to see the effect of each setting on the components.',
            },
        },
    },
    args: {
        settings: DEFAULT_DISPLAY_SETTINGS,
    },
    argTypes: {
        onChange: { action: 'changed' },
        onReset: { action: 'reset' },
    },
};

export default meta;

type Story = StoryObj<typeof DisplayPanel>;

export const Default: Story = {};

export const Interactive: Story = {
    render: (args) => {
        const [settings, setSettings] = useState<DisplaySettings>(DEFAULT_DISPLAY_SETTINGS);

        return (
            <DisplayPanel
                {...args}
                settings={settings}
                onChange={(key, value) => setSettings((current) => ({ ...current, [key]: value }))}
                onReset={() => setSettings(DEFAULT_DISPLAY_SETTINGS)}
            />
        );
    },
};
