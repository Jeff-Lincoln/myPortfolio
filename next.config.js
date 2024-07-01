/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      // Add more patterns as needed
    ],
    domains: ['shorturl.at'], // Add the domain you want to allow
  },
}

module.exports = nextConfig
