// @ts-ignore
import type { Preview } from '@storybook/nextjs';
import '../styles/globals.scss';
//import './storybook.scss';

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
