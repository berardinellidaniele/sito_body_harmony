export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Gym",
        "@id": "https://www.palestrabodyharmony.it/#gym",
        name: "Body Harmony",
        alternateName: [
          "Body Harmony Gym",
          "Palestra Body Harmony",
          "Body Harmony Marina di Montemarciano",
          "Centro Panatta Marina di Montemarciano",
        ],
        description:
          "Body Harmony è la migliore palestra specializzata in body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali, trainer esperti Fabio e Massimo Pietrobon Gobbi e 1000m² di spazio. Aperta 365 giorni l'anno.",
        url: "https://www.palestrabodyharmony.it",
        telephone: "+39 071 919 8353",
        email: "newbodyharmony@libero.it",
        foundingDate: "2020",
        slogan: "La migliore palestra di body building delle Marche",
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
            "@type": "City",
            name: "Senigallia",
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
          "https://www.instagram.com/fabiopietrobongobbi/",
          "https://www.instagram.com/massimopietrobongobbi/",
        ],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Attrezzature Panatta Professionali",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Trainer Certificati Fabio e Massimo Pietrobon Gobbi",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "1000m² di Spazio Dedicato",
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
          {
            "@type": "LocationFeatureSpecification",
            name: "Centro Ufficiale Panatta",
            value: true,
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Abbonamenti Palestra Body Harmony Marina di Montemarciano",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Abbonamento Giornaliero Body Harmony",
              description:
                "Accesso completo alla migliore palestra di body building di Marina di Montemarciano per un giorno",
              price: "8",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              validFrom: "2024-01-01",
              priceValidUntil: "2025-12-31",
              itemOffered: {
                "@type": "Service",
                name: "Accesso Giornaliero Palestra Body Building",
                serviceType: "Fitness",
                provider: {
                  "@id": "https://www.palestrabodyharmony.it/#gym",
                },
              },
            },
            {
              "@type": "Offer",
              name: "Abbonamento Mensile Body Harmony",
              description: "Accesso illimitato per 30 giorni alla palestra con attrezzature Panatta",
              price: "49",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              validFrom: "2024-01-01",
              priceValidUntil: "2025-12-31",
              itemOffered: {
                "@type": "Service",
                name: "Abbonamento Mensile Palestra Body Building",
                serviceType: "Fitness",
                provider: {
                  "@id": "https://www.palestrabodyharmony.it/#gym",
                },
              },
            },
            {
              "@type": "Offer",
              name: "Abbonamento Trimestrale Body Harmony",
              description: "Accesso illimitato per 3 mesi - La scelta più popolare per il body building",
              price: "125",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              validFrom: "2024-01-01",
              priceValidUntil: "2025-12-31",
              itemOffered: {
                "@type": "Service",
                name: "Abbonamento Trimestrale Palestra Body Building",
                serviceType: "Fitness",
                provider: {
                  "@id": "https://www.palestrabodyharmony.it/#gym",
                },
              },
            },
            {
              "@type": "Offer",
              name: "Abbonamento Annuale Body Harmony - PROMO ESTIVA",
              description:
                "Abbonamento annuale in offerta speciale - Massimo risparmio per il body building professionale",
              price: "298",
              priceCurrency: "EUR",
              availability: "https://schema.org/LimitedAvailability",
              validFrom: "2024-06-01",
              priceValidUntil: "2025-08-31",
              itemOffered: {
                "@type": "Service",
                name: "Abbonamento Annuale Palestra Body Building",
                serviceType: "Fitness",
                provider: {
                  "@id": "https://www.palestrabodyharmony.it/#gym",
                },
              },
            },
          ],
        },
        employee: [
          {
            "@type": "Person",
            "@id": "https://www.palestrabodyharmony.it/#fabio",
            name: "Fabio Pietrobon Gobbi",
            jobTitle: "Proprietario & Head Trainer",
            description:
              "Proprietario della palestra Body Harmony e trainer esperto con numerose vittorie in competizioni di body building a Marina di Montemarciano",
            worksFor: {
              "@id": "https://www.palestrabodyharmony.it/#gym",
            },
            sameAs: [
              "https://www.tiktok.com/@fabiopietrobongobbi",
              "https://www.instagram.com/fabiopietrobongobbi/",
              "https://www.facebook.com/fabio.pietrobongobbi/",
            ],
          },
          {
            "@type": "Person",
            "@id": "https://www.palestrabodyharmony.it/#massimo",
            name: "Massimo Pietrobon Gobbi",
            jobTitle: "Trainer & Influencer",
            description:
              "Trainer esperto e noto influencer nel mondo del fitness e body building, specializzato in preparazione atletica",
            worksFor: {
              "@id": "https://www.palestrabodyharmony.it/#gym",
            },
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
              "La migliore palestra di body building della zona! Attrezzature Panatta top e trainer Fabio e Massimo super preparati. Consigliatissima!",
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Giulia M.",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            reviewBody:
              "Body Harmony è fantastica! 1000 metri quadri di puro body building con le migliori attrezzature delle Marche.",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.palestrabodyharmony.it/#website",
        url: "https://www.palestrabodyharmony.it",
        name: "Body Harmony - Palestra Body Building Marina di Montemarciano",
        description:
          "Sito ufficiale di Body Harmony, la migliore palestra di body building a Marina di Montemarciano. Centro Panatta con trainer esperti.",
        publisher: {
          "@id": "https://www.palestrabodyharmony.it/#gym",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.palestrabodyharmony.it/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "it-IT",
      },
      {
        "@type": "Organization",
        "@id": "https://www.palestrabodyharmony.it/#organization",
        name: "Body Harmony",
        alternateName: "Body Harmony Gym Marina di Montemarciano",
        url: "https://www.palestrabodyharmony.it",
        logo: {
          "@type": "ImageObject",
          url: "https://www.palestrabodyharmony.it/logo.png",
          width: 300,
          height: 300,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+39 071 919 8353",
            contactType: "customer service",
            areaServed: "IT",
            availableLanguage: "Italian",
          },
        ],
        sameAs: [
          "https://www.instagram.com/palestrabodyharmony/",
          "https://www.facebook.com/palestrabodyharmony.ancona/",
        ],
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
