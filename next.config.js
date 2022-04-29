/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],

  async redirects() {
    return [
      {
        source: '/cloud-beta',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
