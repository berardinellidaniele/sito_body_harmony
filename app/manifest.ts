import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Body Harmony - Palestra Body Building Marina di Montemarciano",
    short_name: "Body Harmony",
    description:
      "La migliore palestra di body building a Marina di Montemarciano. Centro ufficiale Panatta con trainer esperti.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#f97316",
    orientation: "portrait",
    scope: "/",
    lang: "it",
    categories: ["fitness", "health", "sports"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-wide.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshot-narrow.png",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  }
}
