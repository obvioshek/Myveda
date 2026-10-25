import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // myvedaverse.in is the one address: www.myvedaverse.in moves to it,
  // keeping the path and query.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.myvedaverse.in" }],
        destination: "https://myvedaverse.in/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    // browsers ignore HSTS over plain http, so this only matters once HTTPS is live
    if (process.env.NODE_ENV === "production") {
      security.push({ key: "Strict-Transport-Security", value: "max-age=63072000" });
    }
    return [
      { source: "/:path*", headers: security },
      // Font files never change in place (a new version gets a new name), so
      // browsers can keep them for a year.
      { source: "/fonts/:file*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      // The offline-reading worker must always be fetched fresh, so a new
      // version reaches readers on their next visit.
      {
        source: "/sw.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self'" },
        ],
      },
    ];
  },
};

export default nextConfig;
