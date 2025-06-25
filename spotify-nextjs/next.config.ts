import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "hktcrhyltwvuzvpwwyep.supabase.co"
    ]
  }
};

export default nextConfig;
