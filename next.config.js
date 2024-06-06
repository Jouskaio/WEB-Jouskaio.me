/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    externalDir: true,
  },
  images: {
    loader: "default",
    domains: [
      "https://api.jouskaio.me"
    ]
  },
};
module.exports = nextConfig

// PWA
const pwaConfig = process.env.NODE_ENV;
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



const withPlugins = require('next-compose-plugins')
module.exports = withPlugins([
  [withPWA],
  [withBundleAnalyzer],
  // your other plugins here
])


// Resolving "fs module not found"
