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
- `yarn prod`: Builds all projects and starts the production servers.
- `yarn build`: Compiles all projects (Portfolio and Storybook).
- `yarn lint`: Checks code quality across the entire monorepo.
- `yarn test`: Runs tests across the entire monorepo.
- `yarn storybook`: Launches only Storybook on port 6060.
- `yarn build:lib`: Builds only the UI library (in `packages/ui`).

## UI Library Publication

The `@jouskaio/ui` package is now public and configured for NPM publication.

### How to Publish

1.  **Update the version**: Increment the version in `packages/ui/package.json`.
2.  **Push to main**: The CI/CD pipeline will automatically build and publish the package to NPM if the version is new.
3.  **Manual Publish**: You can run `yarn workspace @jouskaio/ui run publish` locally (requires being logged into NPM).

**Note**: You must define a `NPM_TOKEN` secret in your GitHub repository settings for the automated publication to work.

## Turborepo Guide

This project uses [Turborepo](https://turbo.build/) to manage the monorepo workflow. It allows running tasks across multiple packages and apps simultaneously with smart caching and task orchestration.

### Configuration (`turbo.json`)

The `turbo.json` file defines how tasks depend on each other and what should be cached.

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"], // Run build in dependencies (like packages/ui) before the app (apps/web)
      "outputs": [".next/**", "dist/**", "storybook-static/**"] // Cache these folders for faster subsequent builds
    },
    "build-storybook": {
      "outputs": ["storybook-static/**"]
    },
    "lint": {
      "dependsOn": ["^lint"] // Ensure dependencies are linted too
    },
    "test": {
      "dependsOn": ["^test"]
    },
    "test-storybook": {
      "dependsOn": ["build-storybook"]
    },
    "dev": {
      "cache": false, // Do not cache the dev server (it should always run fresh)
      "persistent": true // Keep the process alive (watch mode)
    },
    "start": {
      "dependsOn": ["build"], // Force a build before starting the production server
      "cache": false,
      "persistent": true
    },
    "storybook": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### How to Add a New Command

If you want to add a new command (e.g., `format`) to be executed across the whole project:

1.  **Define the script in each package**:
    *   Add `"format": "your-command"` to `apps/web/package.json`.
    *   Add `"format": "your-command"` to `packages/ui/package.json`.

2.  **Configure Turbo in `turbo.json`**:
    Add the task to the `tasks` object:
    ```json
    "format": {
      "cache": true // Enable caching if the command produces consistent output
    }
    ```

3.  **Create a shortcut in the root `package.json`**:
    Add `"format": "turbo format"` to the `scripts` section.

4.  **Execute**: Run `yarn format` from the root.

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

## Maintenance & Stability

To ensure build stability and avoid common issues with Storybook 10 and Vite, the following configurations are enforced:

- **React Versions**: Forced to **18.3.1** via the `resolutions` field in the root `package.json`. This prevents conflicts between React 18 and React 19 (which is sometimes pulled by newer dependencies).
- **Sass Version**: Locked to **1.77.8** to avoid deprecation warnings related to the legacy JS API that occur in versions 1.80+.
- **Component Documentation**: Powered by `react-docgen` (configured in Storybook) to ensure props and JSDoc are correctly extracted and displayed.

## Technical Documentation

Consult the specific READMEs for more details:
- [Web Application Documentation](./apps/web/README.md)
- [UI Library Documentation](./packages/ui/README.md)