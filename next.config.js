/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.stage.in" }],
  },
};

module.exports = nextConfig;
