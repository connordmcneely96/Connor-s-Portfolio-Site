/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL || 'http://localhost:8000',
  },
  async rewrites() {
    return [
      {
        source: '/api/ml/:path*',
        destination: `${process.env.BACKEND_API_URL || 'http://localhost:8000'}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
