// Import the necessary modules for Next.js configuration
const withPWA = require("next-pwa");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withPlugins = require('next-compose-plugins');

// Define the main configuration object for Next.js
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    externalDir: true,
  },
  images: {
    loader: "default",
    domains: [
      "api.jouskaio.me", // Ensure these domains are correct
      "blog.jouskaio.me" // Ensure these domains are correct
    ]
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV !== 'production' // Assuming you want PWA only in production
  }
};

// Export a configuration wrapped by all plugins
module.exports = withPlugins([
  [withPWA],
  [withBundleAnalyzer]
], nextConfig);
