// The share image for pages without their own: the site's card, at a fixed
// address (app/share.png, drawn by lib/og-home.tsx). A page that sets
// openGraph replaces the layout's whole openGraph object, image included, so
// each lists it.
export const DEFAULT_OG_IMAGES = [
  { url: "/share.png", width: 1200, height: 630, alt: "Veda Verse: learn the idea, then see how the classics saw it." },
];
