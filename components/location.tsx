"use client"

import { MapPin, Car, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Location() {
  const address = "Via Marina, 63, Marina Di Montemarciano, Marche, Italy 60018"
  const coordinates = "43.6394,13.3194" // Coordinate approssimative per Marina di Montemarciano

  const openInMaps = () => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  const getDirections = () => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, "_blank")
  }

  return (
    <section id="location" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dove <span className="text-orange-500">Siamo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vieni a trovarci nel cuore di Marina di Montemarciano
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mappa OpenStreetMap */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-orange-500/20">
            <div className="aspect-video w-full h-full">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.30,43.62,13.34,43.66&layer=mapnik&marker=43.6394,13.3194"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Body Harmony"
              ></iframe>
            </div>
          </div>

          {/* Informazioni e indicazioni */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-orange-500/20">
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-lg mb-2">Il Nostro Indirizzo</p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Via Marina, 63
                    <br />
                    Marina Di Montemarciano, Marche
                    <br />
                    Italy 60018
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openInMaps}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Visualizza su Maps
                </Button>
                <Button
                  onClick={getDirections}
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent flex items-center justify-center"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Ottieni Indicazioni
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-orange-500/20">
              <h4 className="text-xl font-semibold text-orange-500 mb-4 flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Come Raggiungerci
              </h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">In Auto:</strong> Facilmente raggiungibile dal centro di Marina di
                  Montemarciano. Parcheggio disponibile nelle vicinanze.
                </p>
                <p>
                  <strong className="text-white">Mezzi Pubblici:</strong> Fermata autobus a 200 metri dalla palestra.
                </p>
                <p>
                  <strong className="text-white">A Piedi:</strong> Nel cuore del paese, facilmente raggiungibile dal
                  lungomare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
