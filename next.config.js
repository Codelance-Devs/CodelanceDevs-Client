/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   runtime: 'experimental-edge',
  // },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      },
    ],
  },
}

module.exports = nextConfig
