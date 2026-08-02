import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';
import './storybook.scss';
import 'highlight.js/styles/github.css';
import 'aos/dist/aos.css';
import { ApolloProvider } from '@apollo/client';
import { themes } from 'storybook/theming';
import { mswHandlers } from './msw-handlers';
import MockDate from 'mockdate';
import AOS from 'aos';
import {client} from "../src/lib/api/apolloClient";

let aosInitialized = false;

const preview: Preview = {
    tags: ['autodocs'],
    decorators: [
        (Story, context) => {
            const isDocs = context.viewMode === 'docs';

            React.useEffect(() => {
                AOS.init({
                    duration: 800,
                    once: true,
                    mirror: false,
                    offset: 50,
                    disable: isDocs,
                });
            }, [isDocs]);

            React.useEffect(() => {
                const timer = setTimeout(() => {
                    AOS.refresh();
                }, 100);
                return () => clearTimeout(timer);
            }, [context.args]);

            React.useEffect(() => {
                if (isDocs) {
                    document.body.classList.add('is-docs-mode');
                } else {
                    document.body.classList.remove('is-docs-mode');
                }
            }, [isDocs]);

            return (
                <ApolloProvider client={client}>
                    <Story />
                </ApolloProvider>
            );
        },
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
    },
};

export default preview;
