import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
