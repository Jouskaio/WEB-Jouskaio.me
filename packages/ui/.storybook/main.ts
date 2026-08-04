// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  core: {
    allowedHosts: ['all'],
  },

  staticDirs: [path.join(__dirname, '../../../apps/web/public')],

  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("msw-storybook-addon")
  ],

  "framework": getAbsolutePath("@storybook/nextjs-vite"),

  typescript: {
    reactDocgen: false,
  },
  features: {
    buildStoriesJson: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@jouskaio/ui': path.resolve(__dirname, '../src'),
        },
      },
      server: {
        fs: {
          // Strict isolation: only allow UI package and node_modules
          allow: [
            path.resolve(__dirname, '..'),
            path.resolve(__dirname, '../../../node_modules'),
            path.resolve(__dirname, '../../../apps/web/public'),
          ],
        },
      },
      plugins: [
        {
          name: 'mock-next-image',
          enforce: 'pre',
          resolveId(id: string) {
            if (id === 'next/image') return '\0next/image';
            if (id === 'next/link') return '\0next/link';
          },
          load(id: string) {
            if (id === '\0next/image') {
              return `
                import React from 'react';
                export function getImageProps(props) { return { props: { ...props, src: typeof props.src === 'string' ? props.src : props.src?.src } }; }
                export default function Image({ src, alt, width, height, className, style, fill, ...props }) {
                  if (!src) return null;
                  const imageSrc = (typeof src === 'object' && src !== null) ? (src.src || src.default?.src) : src;
                  const finalStyle = {
                    ...style,
                    ...(fill ? { position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover' } : {}),
                  };
                  return React.createElement('img', {
                    src: imageSrc,
                    alt: alt || '',
                    width: fill ? undefined : width,
                    height: fill ? undefined : height,
                    className,
                    style: finalStyle,
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
          'react-player/lazy'
        ],
      },
      build: {
        sourcemap: false,
        minify: 'esbuild',
        chunkSizeWarningLimit: 1000,
      }
    });
  }
};
export default config;

function getAbsolutePath(value: string): any {
  try {
    return dirname(require.resolve(join(value, "package.json")));
  } catch (e) {
    return value;
  }
}