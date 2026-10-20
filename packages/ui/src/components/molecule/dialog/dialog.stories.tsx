// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Dialog from './dialog';

const meta: Meta<typeof Dialog> = {
    title: 'Molecule/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Modal window on the native `<dialog>` element: the focus stays inside, Escape closes it and the focus goes back to the button that opened it.',
            },
        },
    },
    args: {
        title: 'A dialog',
        open: true,
        children: 'The content of the dialog.',
    },
    argTypes: {
        onClose: { action: 'closed' },
    },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Open: Story = {};

export const Drawer: Story = {
    args: { variant: 'drawer', title: 'Menu' },
    parameters: {
        docs: {
            description: {
                story: 'Slides in from the right on a wide screen, rises from the bottom as a sheet on a small one. The menu and the display settings use it.',
            },
        },
    },
};

export const Interactive: Story = {
    args: { open: false },
    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <button type="button" onClick={() => setOpen(true)}>
                    Open the dialog
                </button>
                <Dialog {...args} open={open} onClose={() => setOpen(false)} />
            </>
        );
    },
};
