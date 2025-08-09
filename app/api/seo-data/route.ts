import { NextResponse } from "next/server"

export async function GET() {
  const seoData = {
    businessName: "Body Harmony",
    fullBusinessName: "Body Harmony - Palestra Body Building Marina di Montemarciano",
    description:
      "La migliore palestra specializzata in body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali, trainer esperti Fabio e Massimo Pietrobon Gobbi e 1000m² di spazio.",
    address: "Via Marina, 63, Marina Di Montemarciano, Marche 60018",
    phone: "071 919 8353",
    email: "newbodyharmony@libero.it",
    website: "https://www.palestrabodyharmony.it",
    openingHours: {
      monday: "08:30-21:00",
      tuesday: "08:30-21:00",
      wednesday: "08:30-21:00",
      thursday: "08:30-21:00",
      friday: "08:30-21:00",
      saturday: "08:30-18:30",
      sunday: "09:00-13:00",
    },
    services: [
      "Body Building Professionale",
      "Allenamento con Attrezzature Panatta",
      "Personal Training con Fabio Pietrobon Gobbi",
      "Personal Training con Massimo Pietrobon Gobbi",
      "Consulenza Nutrizionale",
      "Preparazione Gare Body Building",
      "Allenamento Funzionale",
      "Cardio Training",
    ],
    keywords: [
      // Primary keywords
      "palestra body building Marina di Montemarciano",
      "Body Harmony palestra",
      "centro Panatta Marina di Montemarciano",
      "palestra Marina di Montemarciano",

      // Geographic keywords
      "palestre Marche",
      "palestra Ancona provincia",
      "fitness Marina di Montemarciano",
      "palestra Montemarciano",
      "palestre vicino a me Marina di Montemarciano",

      // Service keywords
      "body building professionale",
      "attrezzature Panatta",
      "trainer esperti body building",
      "Fabio Pietrobon Gobbi trainer",
      "Massimo Pietrobon Gobbi influencer",
      "personal training Marina di Montemarciano",
      "preparazione gare body building",

      // Long tail keywords
      "migliore palestra body building Marche",
      "palestra aperta 365 giorni Marina di Montemarciano",
      "centro fitness professionale Ancona",
      "abbonamento palestra Marina di Montemarciano",
      "palestra 1000 metri quadri",
      "body building competizioni Marche",

      // Commercial keywords
      "abbonamento palestra economico",
      "prezzi palestra Marina di Montemarciano",
      "offerte palestra body building",
      "promo palestra annuale",
      "iscrizione palestra Marina di Montemarciano",
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/palestrabodyharmony/",
      facebook: "https://www.facebook.com/palestrabodyharmony.ancona/",
      tiktokFabio: "https://www.tiktok.com/@fabiopietrobongobbi",
      tiktokMassimo: "https://www.tiktok.com/@massimopietrobongobbi",
      instagramFabio: "https://www.instagram.com/fabiopietrobongobbi/",
      instagramMassimo: "https://www.instagram.com/massimopietrobongobbi/",
    },
    coordinates: {
      latitude: 43.6394,
      longitude: 13.3194,
    },
    features: [
      "1000m² di spazio dedicato",
      "Attrezzature Panatta professionali",
      "Trainer certificati e esperti",
      "Aperto 365 giorni l'anno",
      "Parcheggio gratuito",
      "Armadietti sicuri",
      "Aria condizionata",
      "Centro ufficiale Panatta",
    ],
    pricing: {
      daily: 8,
      monthly: 49,
      quarterly: 125,
      annual: 298,
      annualOriginal: 325,
      registrationFee: 25,
    },
  }

  return NextResponse.json(seoData)
}
