/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   loader: 'imgix',
  //   path: 'https://',
  // },
  env: {
    appName: 'Ghost Host',
    appUrl: 'https://',
    apiUrl: 'https://',
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

module.exports = nextConfig
