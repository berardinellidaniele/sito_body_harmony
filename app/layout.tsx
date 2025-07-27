import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Body Harmony - Palestra Body Building Marina di Montemarciano",
    template: "%s | Body Harmony Gym",
  },
  description:
    "Body Harmony è la palestra specializzata in body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali, trainer esperti e 1000m² di spazio. Aperta 7 giorni su 7.",
  keywords: [
    "palestra body building",
    "Marina di Montemarciano",
    "Panatta",
    "body building professionale",
    "palestra Ancona",
    "fitness Marche",
    "allenamento pesi",
    "trainer esperti",
    "Body Harmony",
    "palestra sempre aperta",
    "attrezzature professionali",
  ],
  authors: [{ name: "Body Harmony Gym" }],
  creator: "Body Harmony Gym",
  publisher: "Body Harmony Gym",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.palestrabodyharmony.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Body Harmony - Palestra Body Building Marina di Montemarciano",
    description:
      "Centro ufficiale Panatta per body building professionale. 1000m² di spazio, trainer esperti, aperta 7 giorni su 7. La tua palestra a Marina di Montemarciano.",
    url: "https://www.palestrabodyharmony.it",
    siteName: "Body Harmony Gym",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Body Harmony - Palestra Body Building Marina di Montemarciano",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Harmony - Palestra Body Building Marina di Montemarciano",
    description:
      "Centro ufficiale Panatta per body building professionale. 1000m² di spazio, trainer esperti, aperta 7 giorni su 7.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Gym",
              name: "Body Harmony",
              description:
                "Palestra specializzata in body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali.",
              url: "https://www.palestrabodyharmony.it",
              telephone: "+39 071 919 8353",
              email: "newbodyharmony@libero.it",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Marina, 63",
                addressLocality: "Marina Di Montemarciano",
                addressRegion: "Marche",
                postalCode: "60018",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.6394,
                longitude: 13.3194,
              },
              openingHours: ["Mo-Fr 08:30-21:00", "Sa 08:30-18:30", "Su 09:00-13:00"],
              priceRange: "€€",
              image: "https://www.palestrabodyharmony.it/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/palestrabodyharmony/",
                "https://www.facebook.com/palestrabodyharmony.ancona/",
              ],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Attrezzature Panatta",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Trainer Professionali",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "1000m² di spazio",
                  value: true,
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
