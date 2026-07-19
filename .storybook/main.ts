import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/nextjs-vite",
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          'storybook/internal/theming': 'storybook/theming',
        },
      },
    });
  },
};
export default config;