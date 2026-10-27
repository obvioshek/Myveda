import type { NextConfig } from "next";

// What pages may load. The browser only ever talks to this site: fonts,
// scripts and data are all served from it, and Supabase is used from the
// server alone. Next.js writes small inline scripts and styles into each page,
// hence 'unsafe-inline' (nonces would make every page dynamic). On preview
// deployments, Vercel's toolbar is allowed too.
function contentSecurityPolicy() {
  const preview = process.env.VERCEL_ENV === "preview";
  const live = preview ? " https://vercel.live" : "";
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${live}`,
    `style-src 'self' 'unsafe-inline'${live}`,
    `img-src 'self' data: blob:${preview ? " https://vercel.live https://vercel.com" : ""}`,
    `font-src 'self'${preview ? " https://vercel.live https://assets.vercel.com" : ""}`,
    `connect-src 'self'${preview ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
    `frame-src ${preview ? "https://vercel.live" : "'none'"}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");
}

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // The site has two root layouts (the learning site and the community), so a
  // missing address gets its own page: app/global-not-found.tsx.
  experimental: {
    globalNotFound: true,
  },

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
      // The feed's address opened in a browser leads to a page about the feed,
      // since Chrome shows RSS as raw XML (and XSLT, the old way to dress a feed
      // up, is leaving browsers). Only a page visit carries Sec-Fetch-Dest:
      // document; feed readers and scripts don't, and get the XML. A redirect,
      // not a rewrite, so a browser never keeps the page under the feed's address.
      {
        source: "/feed.xml",
        has: [{ type: "header", key: "sec-fetch-dest", value: "document" }],
        destination: "/learn/weekly/feed",
        permanent: false,
      },
    ];
  },

  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    ];
    // browsers ignore HSTS over plain http, so this only matters once HTTPS is live
    if (process.env.NODE_ENV === "production") {
      security.push({ key: "Strict-Transport-Security", value: "max-age=63072000" });
      // Development needs eval for fast refresh, so the policy applies to builds only.
      security.push({ key: "Content-Security-Policy", value: contentSecurityPolicy() });
    }
    return [
      { source: "/:path*", headers: security },
      // Font files never change in place (a new version gets a new name), so
      // browsers can keep them for a year.
      { source: "/fonts/:file*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      // The feed's address answers a page visit and a feed reader differently
      // (see redirects), so caches keep the two apart.
      { source: "/feed.xml", headers: [{ key: "Vary", value: "Sec-Fetch-Dest" }] },
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
