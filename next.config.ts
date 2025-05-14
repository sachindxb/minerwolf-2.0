// next.config.ts
const nextConfig: NextConfig = {
  // Remove headers section completely
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing/landing/page.html',
      }
    ];
  }
};