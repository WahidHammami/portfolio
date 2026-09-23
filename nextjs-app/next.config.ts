import type { NextConfig } from "next";

const isExport = process.env.EXPORT === "true";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  basePath: isExport ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
