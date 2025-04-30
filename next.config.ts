import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://tailwindcss.com/**')],
  },
  reactStrictMode: true,
};

export default nextConfig;
