/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'TQ Technologies',
    description: 'The TQ un-official store for Kasm-supported workspaces.',
    icon: '/img/tq.png',
    listUrl: 'https://github.com/tquizzle/kasm-registry/',
    contactUrl: 'https://github.com/tquizzle/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
