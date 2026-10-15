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
                // Initialize AOS once or when switching between Docs/Story mode
                AOS.init({
                    duration: 800,
                    once: true,
                    mirror: false,
                    offset: 50,
                    disable: isDocs,
                });
            }, [isDocs]);

            React.useEffect(() => {
                // Only refresh AOS if not in docs mode to save resources
                if (isDocs) return;

                const timer = setTimeout(() => {
                    AOS.refresh();
                }, 100);
                return () => clearTimeout(timer);
            }, [context.args, isDocs]);

            React.useEffect(() => {
                const root = document.documentElement;
                const { siteTheme, siteContrast, siteTextSize, siteFont, siteMotion } = context.globals;
                const set = (name: string, value: string, defaultValue: string) =>
                    value === defaultValue ? root.removeAttribute(name) : root.setAttribute(name, value);
                set('data-theme', siteTheme, 'dark');
                set('data-contrast', siteContrast, 'normal');
                set('data-text-size', siteTextSize, 'normal');
                set('data-font', siteFont, 'default');
                set('data-motion', siteMotion, 'system');
            }, [context.globals]);

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
    // Display settings of the site: the same attributes the display panel puts on <html>
    globalTypes: {
        siteTheme: {
            description: 'Theme of the site',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                dynamicTitle: true,
                items: [
                    { value: 'dark', title: 'Dark theme' },
                    { value: 'light', title: 'Light theme' },
                ],
            },
        },
        siteContrast: {
            description: 'Contrast of the site',
            toolbar: {
                title: 'Contrast',
                icon: 'contrast',
                dynamicTitle: true,
                items: [
                    { value: 'normal', title: 'Standard contrast' },
                    { value: 'high', title: 'High contrast' },
                ],
            },
        },
        siteTextSize: {
            description: 'Text size of the site',
            toolbar: {
                title: 'Text size',
                icon: 'zoom',
                dynamicTitle: true,
                items: [
                    { value: 'normal', title: 'Normal text' },
                    { value: 'large', title: 'Large text' },
                    { value: 'xlarge', title: 'Very large text' },
                ],
            },
        },
        siteMotion: {
            description: 'Animations of the site',
            toolbar: {
                title: 'Animations',
                icon: 'play',
                dynamicTitle: true,
                items: [
                    { value: 'system', title: 'Animations as the device' },
                    { value: 'reduced', title: 'Reduced animations' },
                ],
            },
        },
        siteFont: {
            description: 'Font of the site',
            toolbar: {
                title: 'Font',
                icon: 'edit',
                dynamicTitle: true,
                items: [
                    { value: 'default', title: 'Default font' },
                    { value: 'readable', title: 'Easy to read' },
                ],
            },
        },
    },
    initialGlobals: {
        siteTheme: 'dark',
        siteContrast: 'normal',
        siteTextSize: 'normal',
        siteFont: 'default',
        siteMotion: 'system',
    },
    parameters: {
        options: {
            storySort: {
                order: ['Welcome', 'Atom', 'Molecule', 'Organism', '*'],
            },
        },
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
