/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => {
    return [
      {
        source: "/fonts/JetBrainsMono/Regular.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/JetBrainsMono/Italic.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVEX = createVanillaExtractPlugin();

module.exports = withVEX(nextConfig);
