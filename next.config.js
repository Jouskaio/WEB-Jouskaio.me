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
        protocol: process.env.BLOG_INTERNAL_URL?.startsWith("http") ? process.env.BLOG_INTERNAL_URL.split("://")[0] : "https",
        hostname: process.env.BLOG_INTERNAL_URL?.replace("http://", "").replace("https://", ""),
        port: process.env.BLOG_INTERNAL_URL.includes(":") ? process.env.BLOG_INTERNAL_URL.split(":")[2]?.split("/")[0] : undefined,
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
