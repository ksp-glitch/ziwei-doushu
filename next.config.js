/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lunar-javascript'],
  output: 'export',
  images: { unoptimized: true },
  basePath: '/ziwei-doushu',
};
module.exports = nextConfig;
