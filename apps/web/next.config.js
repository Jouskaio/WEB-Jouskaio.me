const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@jouskaio/ui'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    externalDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.jouskaio.me',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = withPlugins(
    [
      [withPWA],
      [withBundleAnalyzer],
    ],
    nextConfig
);