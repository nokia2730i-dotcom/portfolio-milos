/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias, canvas: false }
    return config
  },
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
}
module.exports = nextConfig
