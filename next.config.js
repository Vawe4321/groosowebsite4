/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 👈 This line disables ESLint checks during production builds
  },
  images: {
    unoptimized: false, // No need for localPatterns for /public usage
  },
}

module.exports = nextConfig
