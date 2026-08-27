import type { NextConfig } from "next";

const configRuntime = process.argv[1] ?? "";
const isNextCli =
  /[\\/]node_modules[\\/]\.bin[\\/]next(?:\.cmd)?$/.test(configRuntime) ||
  /[\\/]node_modules[\\/]next[\\/]dist[\\/]/.test(configRuntime);

const nextConfig: NextConfig = {
  ...(isNextCli
    ? {
        turbopack: {
          resolveAlias: {
            "cloudflare:workers": "./lib/cloudflare-workers-next.ts",
          },
        },
      }
    : {}),
};

export default nextConfig;
