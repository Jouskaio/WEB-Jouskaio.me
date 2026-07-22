import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';
import './storybook.scss';
import 'highlight.js/styles/github.css';
import 'aos/dist/aos.css';
import { ApolloProvider } from '@apollo/client';
import { themes } from 'storybook/theming';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { mswHandlers } from './msw-handlers';
import MockDate from 'mockdate';
import AOS from 'aos';
import {client} from "../src/lib/api/apolloClient";

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
    tags: ['autodocs'],
    loaders: [mswLoader],
    decorators: [
        (Story) => (
            <ApolloProvider client={client}>
                <Story />
            </ApolloProvider>
        ),
    ],
    parameters: {
        darkMode: {
            dark: { ...themes.dark, appBg: '#1A1A1A' },
            light: { ...themes.normal, appBg: '#FFFFFF' }
        },
        docs: {
            theme: themes.dark,
        },
        msw: { handlers: mswHandlers },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        a11y: {
            test: 'todo'
        }
    },
    async beforeEach() {
        MockDate.set('2024-04-01T12:00:00Z');
        if (typeof window !== 'undefined') {
            AOS.init({
                once: false,
                mirror: true,
            });
        }
    },
};

export default preview;
