import React from 'react';
import type { Preview } from '@storybook/react';
import { themes } from 'storybook/theming';
import '../src/styles/globals.scss';
import './storybook.scss';
import { ApolloProvider } from '@apollo/client';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { mswHandlers } from './msw-handlers';
import MockDate from 'mockdate';
import {client} from "../src/lib/api/apolloClient";

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
    tags: ['autodocs'],
    loaders: [mswLoader],
    decorators: [
        (Story, context) =>
            context.viewMode === 'docs' ? (
                <ApolloProvider client={client}>
                    <Story />
                </ApolloProvider>
            ) : (
                <ApolloProvider client={client}>
                    <main className="l-main">
                        <div className="sb-portfolio-preview">
                            <Story />
                        </div>
                    </main>
                </ApolloProvider>
            ),
    ],
    parameters: {
        docs: {
            theme: themes.light,
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
