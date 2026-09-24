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
    return [{ source: "/:path*", headers: security }];
  },
};

export default nextConfig;
