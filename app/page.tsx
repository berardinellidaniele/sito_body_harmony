import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Equipment } from "@/components/equipment"
import { Gallery } from "@/components/gallery"
import { Trainers } from "@/components/trainers"
import { Sponsors } from "@/components/sponsors"
import { Membership } from "@/components/membership"
import { Schedule } from "@/components/schedule"
import { Location } from "@/components/location"
import { Benefits } from "@/components/benefits"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LocalBusinessSchema } from "@/components/seo-schema"
import type { Metadata } from "next"

// Aggiungi questo metadata specifico per la homepage
export const metadata: Metadata = {
  title: "Body Harmony - Palestra Body Building Marina di Montemarciano | Centro Panatta Ufficiale",
  description:
    "🏋️ Body Harmony: la migliore palestra di body building a Marina di Montemarciano. Centro ufficiale Panatta con attrezzature professionali, trainer esperti Fabio e Massimo Pietrobon Gobbi. 1000m² di spazio, aperta 365 giorni l'anno. Abbonamenti da €8/giorno. Scopri la palestra più completa delle Marche!",
  keywords:
    "palestra Marina di Montemarciano, Body Harmony, body building, centro Panatta, palestre Marche, fitness Marina di Montemarciano, trainer esperti, Fabio Pietrobon Gobbi, Massimo Pietrobon Gobbi",
  openGraph: {
    title: "Body Harmony - La Migliore Palestra Body Building Marina di Montemarciano",
    description:
      "🏋️ Centro ufficiale Panatta. 1000m² di spazio, trainer esperti, aperta 365 giorni l'anno. Abbonamenti da €8/giorno.",
    url: "https://www.palestrabodyharmony.it",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Body Harmony - Palestra Body Building Marina di Montemarciano",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Equipment />
          <Gallery />
          <Trainers />
          <Membership />
          <Schedule />
          <Location />
          <Sponsors />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
