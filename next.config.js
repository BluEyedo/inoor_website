/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubPages ? '/inoor_website' : '',
  assetPrefix: isGithubPages ? '/inoor_website/' : '',
};

module.exports = nextConfig;
