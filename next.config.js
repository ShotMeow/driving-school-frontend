/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
    API_URL: process.env.API_URL
  }
};

module.exports = nextConfig;
