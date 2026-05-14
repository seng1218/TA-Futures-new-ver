import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 100],
    localPatterns: [
      {
        pathname: '/logo.png',
        search: '?v=2',
      },
      {
        pathname: '/logo-dark.png',
        search: '?v=2',
      },
    ],
  },
};

export default nextConfig;
