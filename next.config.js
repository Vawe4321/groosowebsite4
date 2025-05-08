/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['grooso.in'], // Allow images from your domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grooso.in',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
