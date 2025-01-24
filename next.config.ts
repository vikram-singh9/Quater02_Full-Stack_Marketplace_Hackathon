import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'], // Allowed image domains
  },
};

export default nextConfig;
