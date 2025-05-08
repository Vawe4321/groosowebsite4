/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allows use of local images under the /public/images path
    localPatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: '**',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
