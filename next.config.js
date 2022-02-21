/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const nextConfig =
  {
    reactStrictMode: true,
    i18n: {
      localeDetection: false,
    },
  }

// module.exports = nextConfig

module.exports =
  nextTranslate(
    nextConfig,
  )
