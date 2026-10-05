import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Veda Verse",
    short_name: "Veda Verse",
    description: "Management concepts explained one clear idea at a time, each read alongside India's classical texts.",
    start_url: "/",
    display: "browser",
    background_color: "#F3F2F2",
    theme_color: "#F3F2F2",
    lang: "en-IN",
    icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png" }],
  };
}
