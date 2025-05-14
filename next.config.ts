import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing/landing/page.html',
      }
    ];
  }
};

export default nextConfig;