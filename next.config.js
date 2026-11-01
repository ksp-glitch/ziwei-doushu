/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lunar-javascript'],
  output: 'export',
  images: { unoptimized: true },
};
module.exports = nextConfig;
