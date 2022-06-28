/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["jouskaio-me.herokuapp.com"]
  },
}
module.exports = nextConfig

// PWA
const pwaConfig = process.env.NODE_ENV;
const server = "https://jouskaio-me.herokuapp.com";
module.exports = server;
const withPWA = require("next-pwa")({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable :  !pwaConfig
  }
});

// Bundle Analyzer : analyze performances of the application
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})


const withPlugins = require('next-compose-plugins')
module.exports = withPlugins([
  [withBundleAnalyzer],
  [withPWA]
  // your other plugins here
])