/** @type {import('next').NextConfig} */
const { version } = require("./package.json");

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  generateBuildId: async () => {
    return version;
  },
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  publicRuntimeConfig: {
    version,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  images: { unoptimized: true },
};

module.exports = nextConfig;
