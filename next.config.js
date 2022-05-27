/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
}
module.exports = nextConfig

// API call
const pwaConfig = process.env.NODE_ENV !== 'production';
const server = "http://localhost:1337";
module.exports = server;

// PWA
const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable : !pwaConfig
  },
});