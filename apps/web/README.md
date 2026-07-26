# Web Application (Portfolio)

This application is Jouskaio's main portfolio, built with **Next.js**. It consumes components from `@jouskaio/ui`.

## Development

```bash
yarn dev
```

## Build and Production

```bash
yarn build
yarn start
```

## Configuration

The PM2 configuration is located in `ecosystem.config.js`. It allows launching the application and the Storybook documentation server.

## Structure

Pages are located in `/pages`. The application uses styles and components imported from the `@jouskaio/ui` package.
