/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true, // will remain until I can deal with node_modules TS errors
  },
}

module.exports = nextConfig
