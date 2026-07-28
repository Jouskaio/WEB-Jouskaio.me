# Web Application (Portfolio)

This application is Jouskaio's main portfolio, built with **Next.js** (Pages Router). It serves as the primary storefront for displaying work, experiences, and professional information.

## Main Features

- **Personal Branding**: Showcases Jouskaio's identity and professional summary.
- **Work Showcase**: Displays completed projects and contributions.
- **Resume/About**: Detailed professional background and technical skills.
- **Responsive Design**: Optimized for all screen sizes using the shared UI library.

## Integration with `@jouskaio/ui`

The application heavily relies on the `@jouskaio/ui` package for its design system.
- **Components**: Imported directly from the library (e.g., `import { Button } from '@jouskaio/ui'`).
- **Styles**: The global design tokens and base styles are imported in `pages/_app.tsx` from `@jouskaio/ui/src/styles/globals.scss`.

## Development

To start the development server for the web app only:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

## Build and Production

### Local Build

```bash
yarn build
```

### Starting the Production Server

```bash
yarn start
```

## Deployment & PM2

The application is configured to run in production using **PM2**. The configuration is defined in `ecosystem.config.js`.

To start the application with PM2:
```bash
pm2 start ecosystem.config.js
```

## Project Structure

- `pages/`: Contains the application routes (Next.js Pages Router).
  - `index.tsx`: Home page.
  - `about.tsx`: Professional background and skills.
  - `work/index.tsx`: Portfolio gallery.
- `public/`: Static assets like images and fonts.
- `styles/`: Application-specific styles (most styles should come from the UI library).
