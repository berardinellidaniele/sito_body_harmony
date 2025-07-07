"use client"

import { useState } from "react"
import { Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredImages = [
  {
    src: "/images/hulk-entrance.jpg",
    alt: "Ingresso con statua Hulk",
    title: "Il nostro iconico ingresso",
  },
  {
    src: "/images/gym-interior-1.jpg",
    alt: "Interno palestra",
    title: "Area allenamento principale",
  },
  {
    src: "/images/leg-extension-1.jpg",
    alt: "Leg Extension Panatta",
    title: "Attrezzature professionali",
  },
  {
    src: "/images/multi-station-1.jpg",
    alt: "Stazione multifunzione",
    title: "Stazioni multifunzione",
  },
  {
    src: "/images/gym-cardio.jpg",
    alt: "Area cardio",
    title: "Zona cardio e functional",
  },
  {
    src: "/images/leg-press.jpg",
    alt: "Leg Press",
    title: "Macchinari Panatta",
  },
]

export function Gallery() {
  const [showAll, setShowAll] = useState(false)

  const displayedImages = showAll ? featuredImages : featuredImages.slice(0, 4)

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La Nostra <span className="text-orange-500">Galleria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scopri gli spazi e le attrezzature della palestra Body Harmony
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {displayedImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4 font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          {!showAll ? (
            <Button onClick={() => setShowAll(true)} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Grid3X3 className="h-5 w-5 mr-2" />
              Visualizza Tutte le Foto
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-300">Hai visto tutte le foto in evidenza!</p>
              <Button
                onClick={() => setShowAll(false)}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
              >
                Mostra Meno
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
