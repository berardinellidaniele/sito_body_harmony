export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Gym",
    name: "Body Harmony",
    description:
      "Palestra specializzata in body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali e trainer esperti.",
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
    image: [
      "https://www.palestrabodyharmony.it/og-image.jpg",
      "https://www.palestrabodyharmony.it/images/gym-interior-1.jpg",
    ],
    sameAs: ["https://www.instagram.com/palestrabodyharmony/", "https://www.facebook.com/palestrabodyharmony.ancona/"],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Attrezzature Panatta Professionali",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Trainer Certificati",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "1000m² di Spazio",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Aperto 7 giorni su 7",
        value: true,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Abbonamenti Palestra",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Abbonamento Giornaliero",
          },
          price: "8",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Abbonamento Mensile",
          },
          price: "49",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Abbonamento Trimestrale",
          },
          price: "125",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Abbonamento Annuale",
          },
          price: "298",
          priceCurrency: "EUR",
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
