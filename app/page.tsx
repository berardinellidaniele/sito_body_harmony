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
