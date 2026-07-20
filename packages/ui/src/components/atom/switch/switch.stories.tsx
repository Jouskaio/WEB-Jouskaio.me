// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Switch from './switch';

const meta: Meta<typeof Switch> = {
    title: 'Atom/Switch',
    component: Switch,
    args: {
        name: 'demo-switch',
        isChecked: false,
    },
    argTypes: {
        onClick: { action: 'toggled' },
    },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
    args: {
        isChecked: true,
    },
};

export const Interactive: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(args.isChecked ?? false);

        return (
            <Switch
                {...args}
                isChecked={checked}
                onClick={(nextChecked) => {
                    setChecked(nextChecked);
                    args.onClick?.(nextChecked);
                }}
            />
        );
    },
};
