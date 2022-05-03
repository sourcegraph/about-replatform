/** @type {import('next').NextConfig} */

const nextConfig = {

  reactStrictMode: true,
  pageExtensions: ['tsx'],

  // TODO: Fix
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ['@svgr/webpack'],
  //   })
  //   return config
  // },

}

module.exports = nextConfig
