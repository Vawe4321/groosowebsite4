/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable ESLint during production builds
  },
  images: {
    domains: ['grooso.in'], // ✅ Allow images from your domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grooso.in',
        pathname: '/images/**',
      },
    ],
    unoptimized: false, // ✅ Use Next.js image optimization (set to true to disable)
  },
};

module.exports = nextConfig;
