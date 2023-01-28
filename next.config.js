/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  }
};

module.exports = nextConfig;
