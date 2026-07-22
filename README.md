# Jouskaio Monorepo (Portfolio & UI Library)

This project is a monorepo managed with **Turborepo** and **Yarn Workspaces**. It contains Jouskaio's personal portfolio as well as a reusable UI component library.

## Project Structure

- `apps/web`: The Next.js application (Portfolio).
- `packages/ui`: The UI component library (React + SCSS) and Storybook.

## Installation

```bash
yarn install
```

## Main Commands

All commands can be run from the project root:

- `yarn dev`: Launches the portfolio and Storybook in development mode.
- `yarn build`: Compiles all projects (Portfolio and Storybook).
- `yarn lint`: Checks code quality across the entire monorepo.
- `yarn test`: Runs tests across the entire monorepo.
- `yarn storybook`: Launches only Storybook on port 6060.

## Deployment

Deployment is automated via GitHub Actions. For manual execution on the server via PM2:

```bash
# In apps/web
pm2 start ecosystem.config.js
```

## UI Library Usage

To add the UI library to a new project in this monorepo:

1. Add `"@jouskaio/ui": "*"` to your application's `package.json`.
2. Import components: `import { Button } from '@jouskaio/ui'`.

## Technical Documentation

Consult the specific READMEs for more details:
- [Web Application Documentation](./apps/web/README.md)
- [UI Library Documentation](./packages/ui/README.md)