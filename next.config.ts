import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
  // Output configuration for Cloudflare Pages static export
  output: process.env.CF_PAGES ? 'export' : undefined,

  // Image optimization - unoptimized for static export
  images: {
    unoptimized: process.env.CF_PAGES === '1',
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE || '',
    NEXT_PUBLIC_WORKER_URL: process.env.NEXT_PUBLIC_WORKER_URL || '',
  },

  // Experimental features for Next.js 15
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'framer-motion', 'gsap'],
  },

  // Webpack configuration for GSAP
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      gsap: 'gsap',
    };
    return config;
  },
};

export default withContentlayer(nextConfig);
