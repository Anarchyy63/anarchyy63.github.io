import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["static-cdn.jtvnw.net"],
    unoptimized: true,
  },
};

export default nextConfig;
