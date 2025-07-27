import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/"],
    },
    sitemap: "https://www.palestrabodyharmony.it/sitemap.xml",
    host: "https://www.palestrabodyharmony.it",
  }
}
