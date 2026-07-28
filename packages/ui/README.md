# @jouskaio/ui

Shared UI component library for Jouskaio's portfolio. Built with **React**, **TypeScript**, and **Sass**, it provides a consistent design system across the monorepo.

## Installation

This package is intended to be used within the Jouskaio Monorepo using Yarn Workspaces.

```bash
yarn workspace your-app add @jouskaio/ui
```

## Development (Storybook)

We use Storybook to develop components in isolation and provide live documentation.

```bash
yarn storybook
```

- **Port**: 6060
- **URL**: `http://localhost:6060`

Storybook is configured with several addons:
- **Controls**: Interact with component props dynamically.
- **Actions**: Log events and callbacks.
- **Docs**: Automatic documentation generated from JSDoc and TypeScript types.
- **Dark Mode**: Toggle between light and dark themes.

## Structure (Atomic Design)

The library follows a strict **Atomic Design** hierarchy to ensure reusability and scalability:

- **`src/components/atom`**: The smallest building blocks (e.g., `Button`, `Icon`, `Typography`). They are context-independent.
- **`src/components/molecule`**: Simple groups of atoms functioning together (e.g., `CardNews`, `WidgetContact`, `Alert`).
- **`src/components/organism`**: Complex components that form distinct sections of an interface (e.g., `Header`, `Footer`, `FeedArticles`).
- **`src/lib`**: Shared utilities, hooks, and motion/animation logic (AOS, custom hooks).

## Styles (SCSS)

Styles are located in `src/styles` and follow a modular architecture:
- `00-protons`: Variables, colors, and mixins (tokens).
- `01-atoms`: Styles for basic components.
- `02-molecules`: Styles for molecule-level components.
- `03-organisms`: Styles for complex organisms.
- `04-layout`: Global layouts and page-specific grid systems.
- `globals.scss`: The main entry point for styles, to be imported by applications.

## Build and Publication

The library is compiled using **Vite** in library mode.

### Commands

- `yarn build`: Compiles the library into `dist/` (ESM and CJS formats) and generates TypeScript declarations.
- `yarn build-storybook`: Generates a static version of Storybook.
- `yarn publish`: Publishes the package to NPM (automated via CI/CD).

### Technical Exports

The package exports:
- `dist/index.mjs`: ESM version for modern bundlers.
- `dist/index.js`: CommonJS version.
- `dist/index.d.ts`: TypeScript definitions.
- `dist/style.css`: The compiled CSS for all components.
- `src/*`: Source files are also exported to allow deep imports of SCSS if needed.

## Adding New Components

1. Create the component directory in the appropriate Atomic level (e.g., `src/components/molecule/MyComponent`).
2. Add the `.tsx` file with proper **JSDoc** for documentation generation.
3. Add a `.stories.tsx` file to document it in Storybook.
4. Export the component in `src/index.ts`.
5. Add the corresponding style in `src/styles/` and import it in `globals.scss`.
