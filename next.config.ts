import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
  // Try redirects instead of rewrites
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing/landing/page.html',
        permanent: true,
      }
    ];
  },

  // Keep basic rewrites for other paths
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      }
    ];
  }
};

export default nextConfig;