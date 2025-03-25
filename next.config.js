/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/about-new",
      },
    ];
  },
};

module.exports = nextConfig;
