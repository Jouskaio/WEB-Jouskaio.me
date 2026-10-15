// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import PluginAudio from './pluginAudio';

const meta: Meta<typeof PluginAudio> = {
    title: 'Molecule/PluginAudio',
    component: PluginAudio,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Reads a text aloud with the browser speech synthesis. It is a button: focus it with Tab, then press Enter or Space.',
            },
        },
    },
    args: {
        id: 'demo',
        text: 'Storybook documents every component of the portfolio, so each one can be reused and tested on its own.',
    },
};

export default meta;

type Story = StoryObj<typeof PluginAudio>;

export const Default: Story = {};
