import { NextResponse } from "next/server"

export async function GET() {
  const seoData = {
    businessName: "Body Harmony",
    description: "Palestra specializzata in body building a Marina di Montemarciano",
    address: "Via Marina, 63, Marina Di Montemarciano, Marche 60018",
    phone: "071 919 8353",
    email: "newbodyharmony@libero.it",
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
      "Personal Training",
      "Consulenza Nutrizionale",
      "Preparazione Gare",
    ],
    keywords: [
      "palestra body building Marina di Montemarciano",
      "centro Panatta Ancona",
      "body building professionale Marche",
      "palestra sempre aperta",
      "trainer esperti body building",
    ],
  }

  return NextResponse.json(seoData)
}
