import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
  // Update rewrites to handle root URL
  async rewrites() {
    return [
      {
        // This will make root URL show your landing page
        source: '/',
        destination: '/landing/landing/page.html',
      },
      {
        // Keep this for other paths
        source: '/:path*',
        destination: '/:path*',
      }
    ];
  }
};

export default nextConfig;