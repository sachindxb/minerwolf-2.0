import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
  // Clean URL structure
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/landing/landing/page.html',
        }
      ]
    };
  }
};

export default nextConfig;