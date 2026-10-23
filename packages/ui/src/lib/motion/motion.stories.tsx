// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { runWithThemeReveal } from './themeTransition';

const meta: Meta = {
    title: 'Foundations/Motion',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: [
                    'The motion of the site. Every effect only moves `transform` and `opacity` (no layout shift), lasts less than 700 ms,',
                    'and stops for visitors who asked for fewer animations, in the display panel or in the system settings.',
                    '',
                    '- **Pages**: the old page fades out, the new one rises a little (View Transitions API). The icon and the name of a project glide from the list to its page. Browsers without the API simply navigate.',
                    '- **Theme**: the new colors are revealed by a circle that grows from the control used.',
                ].join('\n'),
            },
        },
    },
};

export default meta;

type Story = StoryObj;

export const ThemeReveal: Story = {
    name: 'Theme reveal',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <p>Click the button: the other theme grows as a circle from the button (in a browser with the View Transitions API).</p>
            <button
                type="button"
                className="a-button"
                onClick={() =>
                    runWithThemeReveal(() => {
                        const root = document.documentElement;
                        root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
                    })
                }
            >
                Switch the theme
            </button>
        </div>
    ),
};
