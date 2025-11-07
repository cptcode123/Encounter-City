import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // Transpile Sanity packages for proper bundling
  transpilePackages: ['next-sanity', 'sanity'],
};

export default nextConfig;
