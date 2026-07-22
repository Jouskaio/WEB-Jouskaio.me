import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  staticDirs: [path.join(__dirname, '../../../apps/web/public')],
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "storybook-dark-mode"
  ],
  "framework": "@storybook/nextjs-vite",
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        {
          name: 'mock-next-image',
          enforce: 'pre',
          resolveId(id) {
            if (id === 'next/image') return '\0next/image';
            if (id === 'next/link') return '\0next/link';
          },
          load(id) {
            if (id === '\0next/image') {
              return `
                import React from 'react';
                export function getImageProps(props) { return { props: { ...props, src: typeof props.src === 'string' ? props.src : props.src?.src } }; }
                export default function Image({ src, alt, width, height, className, style, ...props }) {
                  if (!src) return null;
                  const imageSrc = (typeof src === 'object' && src !== null) ? (src.src || src.default?.src) : src;
                  return React.createElement('img', {
                    src: imageSrc,
                    alt: alt || '',
                    width,
                    height,
                    className,
                    style,
                    loading: 'lazy',
                    decoding: 'async',
                  });
                }
              `;
            }
            if (id === '\0next/link') {
              return `
                import React from 'react';
                export default function Link({ children, href, legacyBehavior, ...props }) {
                  const { passHref, prefetch, replace, scroll, shallow, locale, ...rest } = props;
                  if (legacyBehavior && React.isValidElement(children)) {
                    return React.cloneElement(React.Children.only(children), { href, ...rest });
                  }
                  return React.createElement('a', { href, ...rest }, children);
                }
              `;
            }
          },
        },
      ],
      optimizeDeps: {
        include: [
          'react-highlight',
          'react-player',
          'react-player/lazy',
          'react-dom',
          'react-dom/client'
        ],
      },
    });
  },
};
export default config;