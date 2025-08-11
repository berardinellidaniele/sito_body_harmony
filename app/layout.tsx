import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Body Harmony - Palestra Body Building Marina di Montemarciano | Centro Panatta",
    template: "%s | Body Harmony - Palestra Marina di Montemarciano",
  },
  description:
    "🏋️ Body Harmony: la migliore palestra di body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali, trainer esperti e 1000m² di spazio. Aperta 7 giorni su 7, 365 giorni l'anno. Abbonamenti da €8/giorno. Scopri la palestra più completa delle Marche!",
  keywords: [
    // Parole chiave primarie
    "palestra Marina di Montemarciano",
    "Body Harmony palestra",
    "palestra body building Marina di Montemarciano",
    "centro Panatta Marina di Montemarciano",

    // Parole chiave geografiche
    "palestra Montemarciano",
    "palestre vicino a me Marina di Montemarciano",
    "palestra Ancona provincia",
    "palestre Marche",
    "fitness Marina di Montemarciano",

    // Parole chiave di servizio
    "body building professionale",
    "attrezzature Panatta",
    "palestra sempre aperta",
    "trainer esperti body building",
    "preparazione gare body building",
    "personal training Marina di Montemarciano",

    // Long tail keywords
    "migliore palestra body building Marche",
    "palestra aperta 7 giorni su 7 Marina di Montemarciano",
    "centro fitness professionale Ancona",
    "abbonamento palestra Marina di Montemarciano",
    "palestra 1000 metri quadri",
    "Fabio Pietrobon Gobbi trainer",
    "Massimo Pietrobon Gobbi influencer fitness",

    // Parole chiave commerciali
    "abbonamento palestra economico",
    "palestra prezzi Marina di Montemarciano",
    "iscrizione palestra",
    "prova gratuita palestra",
  ],
  authors: [{ name: "Body Harmony Gym" }, { name: "Fabio Pietrobon Gobbi" }, { name: "Massimo Pietrobon Gobbi" }],
  creator: "Body Harmony - Palestra Marina di Montemarciano",
  publisher: "Body Harmony Gym",
  category: "Fitness & Body Building",
  classification: "Palestra, Centro Fitness, Body Building",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.palestrabodyharmony.it"),
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
    },
  },
  openGraph: {
    title: "Body Harmony - La Migliore Palestra Body Building Marina di Montemarciano",
    description:
      "🏋️ Centro ufficiale Panatta per body building professionale. 1000m² di spazio, trainer esperti, aperta 365 giorni l'anno. Abbonamenti da €8/giorno. La palestra più completa delle Marche!",
    url: "https://www.palestrabodyharmony.it",
    siteName: "Body Harmony - Palestra Marina di Montemarciano",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Body Harmony - Palestra Body Building Marina di Montemarciano - Centro Panatta",
        type: "image/jpeg",
      },
      {
        url: "/images/gym-interior-1.jpg",
        width: 1200,
        height: 800,
        alt: "Interno palestra Body Harmony con attrezzature Panatta professionali",
        type: "image/jpeg",
      },
    ],
    locale: "it_IT",
    type: "website",
    countryName: "Italy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Harmony - Palestra Body Building Marina di Montemarciano",
    description:
      "🏋️ Centro ufficiale Panatta. 1000m² di spazio, trainer esperti, aperta 365 giorni l'anno. La migliore palestra delle Marche!",
    images: ["/og-image.jpg"],
    creator: "@bodyharmonygym",
    site: "@bodyharmonygym",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  other: {
    "geo.region": "IT-57",
    "geo.placename": "Marina di Montemarciano",
    "geo.position": "43.6394;13.3194",
    ICBM: "43.6394, 13.3194",
    "DC.title": "Body Harmony - Palestra Body Building Marina di Montemarciano",
    rating: "general",
    distribution: "global",
    "revisit-after": "1 days",
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
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />

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
              "@id": "https://www.palestrabodyharmony.it/#gym",
              name: "Body Harmony",
              alternateName: ["Body Harmony Gym", "Palestra Body Harmony", "Body Harmony Marina di Montemarciano"],
              description:
                "Body Harmony è la migliore palestra specializzata in body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali, trainer esperti e 1000m² di spazio. Aperta 365 giorni l'anno.",
              url: "https://www.palestrabodyharmony.it",
              telephone: "+39 071 919 8353",
              email: "newbodyharmony@libero.it",
              foundingDate: "2020",
              slogan: "La tua palestra di body building professionale",
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
              areaServed: [
                {
                  "@type": "City",
                  name: "Marina di Montemarciano",
                },
                {
                  "@type": "City",
                  name: "Montemarciano",
                },
                {
                  "@type": "City",
                  name: "Ancona",
                },
                {
                  "@type": "State",
                  name: "Marche",
                },
              ],
              openingHours: ["Mo-Fr 08:30-21:00", "Sa 08:30-18:30", "Su 09:00-13:00"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:30",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:30",
                  closes: "18:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              priceRange: "€€",
              paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
              currenciesAccepted: "EUR",
              image: [
                "https://www.palestrabodyharmony.it/og-image.jpg",
                "https://www.palestrabodyharmony.it/images/gym-interior-1.jpg",
                "https://www.palestrabodyharmony.it/hulk.jpg",
              ],
              logo: {
                "@type": "ImageObject",
                url: "https://www.palestrabodyharmony.it/logo.png",
                width: 300,
                height: 300,
              },
              sameAs: [
                "https://www.instagram.com/palestrabodyharmony/",
                "https://www.facebook.com/palestrabodyharmony.ancona/",
                "https://www.tiktok.com/@fabiopietrobongobbi",
                "https://www.tiktok.com/@massimopietrobongobbi",
              ],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Attrezzature Panatta Professionali",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Trainer Certificati e Esperti",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "1000m² di Spazio",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Aperto 365 giorni l'anno",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Parcheggio Gratuito",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Armadietti Sicuri",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Aria Condizionata",
                  value: true,
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Abbonamenti Palestra Body Harmony",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Abbonamento Giornaliero",
                    description: "Accesso completo alla palestra per un giorno",
                    price: "8",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    validFrom: "2024-01-01",
                    priceValidUntil: "2025-12-31",
                    itemOffered: {
                      "@type": "Service",
                      name: "Accesso Giornaliero Palestra",
                      serviceType: "Fitness",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Abbonamento Mensile",
                    description: "Accesso illimitato per 30 giorni",
                    price: "49",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    validFrom: "2024-01-01",
                    priceValidUntil: "2025-12-31",
                    itemOffered: {
                      "@type": "Service",
                      name: "Abbonamento Mensile Palestra",
                      serviceType: "Fitness",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Abbonamento Trimestrale",
                    description: "Accesso illimitato per 3 mesi - La scelta più popolare",
                    price: "125",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    validFrom: "2024-01-01",
                    priceValidUntil: "2025-12-31",
                    itemOffered: {
                      "@type": "Service",
                      name: "Abbonamento Trimestrale Palestra",
                      serviceType: "Fitness",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Abbonamento Annuale - PROMO ESTIVA",
                    description: "Abbonamento annuale in offerta speciale - Massimo risparmio",
                    price: "298",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/LimitedAvailability",
                    validFrom: "2024-06-01",
                    priceValidUntil: "2025-08-31",
                    itemOffered: {
                      "@type": "Service",
                      name: "Abbonamento Annuale Palestra",
                      serviceType: "Fitness",
                    },
                  },
                ],
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Fabio Pietrobon Gobbi",
                  jobTitle: "Proprietario & Head Trainer",
                  description:
                    "Proprietario della palestra Body Harmony e trainer esperto con numerose vittorie in competizioni di body building",
                  sameAs: [
                    "https://www.tiktok.com/@fabiopietrobongobbi",
                    "https://www.instagram.com/fabiopietrobongobbi/",
                    "https://www.facebook.com/fabio.pietrobongobbi/",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Massimo Pietrobon Gobbi",
                  jobTitle: "Trainer & Influencer",
                  description: "Trainer esperto e noto influencer nel mondo del fitness e body building",
                  sameAs: [
                    "https://www.tiktok.com/@massimopietrobongobbi",
                    "https://www.instagram.com/massimopietrobongobbi/",
                    "https://www.facebook.com/massimo.pietrobongobbi/",
                  ],
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Marco R.",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "La migliore palestra di body building della zona! Attrezzature Panatta top e trainer super preparati.",
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
