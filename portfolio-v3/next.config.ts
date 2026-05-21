import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  env: {
    v2Domain: process.env.v2Domain,
    v3Domain: process.env.v3Domain,
  },
};

export default nextConfig;
