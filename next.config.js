/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'github.com',
      'user-images.githubusercontent.com',
      'images.microcms-assets.io',
    ],
  },
};

module.exports = nextConfig;
