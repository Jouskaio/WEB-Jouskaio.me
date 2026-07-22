import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import Code from './code';

const meta: Meta<typeof Code> = {
    title: 'Atom/Code',
    component: Code,
    tags: ['ai-generated'],
    parameters: {
        docs: {
            description: {
                component: 'Code block with syntax highlighting via react-highlight.',
            },
        },
    },
    args: {
        language: 'ts',
        classname: '',
        children: `type User = {
    id: number;
    name: string;
};

const user: User = {
    id: 1,
    name: 'Jouskaio',
};`,
    },
    argTypes: {
        language: {
            control: 'select',
            options: ['js', 'ts', 'tsx', 'html', 'css', 'scss', 'json', 'bash'],
        },
        classname: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const codeElement = canvasElement.querySelector('code');
        expect(codeElement).toBeInTheDocument();
        // Check for highlighting class if possible, react-highlight usually adds hljs
        expect(codeElement).toHaveClass('hljs');
    },
};

export const JavaScript: Story = {
    args: {
        language: 'js',
        children: `function hello(name) {
    return 'Hello ' + name;
}

console.log(hello('World'));`,
    },
};

export const Html: Story = {
    args: {
        language: 'html',
        children: `<section class="hero">
    <h1>Hello World</h1>
    <p>Storybook demo</p>
</section>`,
    },
};
