/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["jouskaio-me.herokuapp.com"]
  },
}
module.exports = nextConfig

// API call
const pwaConfig = process.env.NODE_ENV;
const server = "https://jouskaio-me.herokuapp.com";
module.exports = server;

// PWA
const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable :  !pwaConfig
  },
});
