# @jouskaio/ui

Shared UI component library for Jouskaio's portfolio.

## Installation

This package is intended to be used within the Jouskaio Monorepo.

## Development (Storybook)

Storybook is used as the development and documentation environment for components.

```bash
yarn storybook
```

Access: `http://localhost:6060`

## Structure (Atomic Design)

Components are organized according to Atomic Design principles:
- `src/components/atom`: Basic components (Text, Button, Icons).
- `src/components/molecule`: Simple assemblies (Cards, Form fields).
- `src/components/organism`: Complex page sections.

## Styles

Styles are written in **SCSS** and are located in `src/styles`.
The `src/styles/globals.scss` file contains global variables and styles.

## Tests

```bash
yarn test-storybook
```
