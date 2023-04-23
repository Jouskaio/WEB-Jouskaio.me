# Front-end portfolio 2022

## Installation

To run this application for the first time, make sure to execute `yarn istall`, `next build` and then `npm run dev`.

- [Strapi - Build a blog with Next.JS](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi)
- [Strapi - Build a blog with React, Strapi and Apollo](https://strapi.io/blog/build-a-blog-with-react-strapi-and-apollo)
- [Strapi Github](https://github.com/vercel/next.js/tree/canary/examples/cms-strapi)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Documentation

For the first installation, be sure to run `yarn istall`, `next build` and then `npm run dev`. 

Several commands are possible to use with the project :
- `next build` : build the project
- `next dev` : start the server in development mode
- `next start` : start the server in production mode
- `next styleguide:build` : build the styleguidist auto documentation
- `next styleguide` : start the server to visualize styleguidist documentation

## Update SSL certificate on Heroku

SSL certificate is approved and managed by Let's Encrypt but not automatically.
To update the certificate, you need to run the following command :

``` bash
sudo certbot certonly --authenticator manual --installer heroku
```

To get the txt to add on the app run :

```bash
sudo certbot certonly --manual --preferred-challenges http --email YOUR-EMAIL --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d YOURDOMAIN.com -d www.YOURDOMAIN.com

```
Follow then this tuto : [Uplift.ltd - Heroku SSL + Let's Encrypt](https://www.uplift.ltd/posts/heroku-ssl-letsencrypt/)

## Packages installed

- `depcheck` which allow visualizing which npm packages are unnecessary for the project
- `babel-loader style-loader css-loader sass-loader` to use webpack loader in order to generate documentation with `styleguidist`
- `sharp` to optimize images (Next.JS recommendation : https://nextjs.org/docs/messages/sharp-missing-in-production
  )
- `@types/component-emitter` because of an error while building the project.
``` bash
info  - Loaded env from /Users/jouskaio/Documents/Development/Projets/Portfolio/Jouskaio-Front/.env
Failed to compile.

Type error: Cannot find type definition file for 'component-emitter'.
  The file is in the program because:
    Entry point for implicit type library 'component-emitter'
```