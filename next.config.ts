/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/bjb', // Replace with your repo name
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig