const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== "production",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPlugins = require("next-compose-plugins");

const isLocal = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    externalDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.jouskaio.me",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.jouskaio.me",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = withPlugins(
  [
    [withPWA],
    [withBundleAnalyzer],
  ],
  nextConfig
);
