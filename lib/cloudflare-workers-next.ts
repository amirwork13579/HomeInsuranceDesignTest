/**
 * Local Next.js fallback for Cloudflare's runtime environment module.
 * Production Sites builds continue to use the real `cloudflare:workers` module.
 */
export const env = {
  get ADMIN_EMAILS() {
    return process.env.ADMIN_EMAILS;
  },
  DB: undefined,
};
