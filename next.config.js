const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    externalDir: true,
  },
  images: {
    loader: "default",
    domains: [
      "api.jouskaio.me",
      "blog.jouskaio.me"
    ],
  },
};

module.exports = withPlugins([
  [withPWA],
  [withBundleAnalyzer]
], nextConfig);
