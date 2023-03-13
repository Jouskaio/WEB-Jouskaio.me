/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "jouskaio-me.herokuapp.com"
    ]
  },
}
module.exports = nextConfig

// PWA
const pwaConfig = process.env.NODE_ENV;
const server = "https://jouskaio-me.herokuapp.com";
module.exports = server;
const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable :  !pwaConfig
  }
});

// Bundle Analyzer: analyze performances of the application
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

// Webpack
module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config
  },
  experimental: {
    forceSwcTransforms: true,
  }
}


const withPlugins = require('next-compose-plugins')
module.exports = withPlugins([
  [withPWA],
  [withBundleAnalyzer],
  // your other plugins here
])