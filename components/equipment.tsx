"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { equipmentData } from "@/data/equipment"
import { Button } from "@/components/ui/button"
import { Wrench, Sparkles, Zap, Star } from "lucide-react"

export function Equipment() {
  const [showAll, setShowAll] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const displayedEquipment = showAll ? equipmentData : equipmentData.slice(0, 6)

  useEffect(() => {
    const el = document.getElementById("equipment")
    if (!el) return
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const handleImageLoad = (i: number) => setLoadedImages((p) => new Set(p).add(i))

  return (
    <section id="equipment" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* bg effects... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* heading ... */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {displayedEquipment.map((equipment, index) => (
            <div
              key={index}
              className={`group bg-black rounded-xl sm:rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/60 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/25 hover:bg-gray-900/90 delay-${
                (index + 1) * 100
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="aspect-square bg-white relative overflow-hidden">
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <Image
                  src={equipment.image}
                  alt={`${equipment.name} - Attrezzatura Panatta per ${equipment.targetMuscles} - Body Harmony Marina di Montemarciano`}
                  fill
                  onLoadingComplete={() => handleImageLoad(index)}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-3 sm:p-4 transition-transform duration-700 group-hover:scale-110"
                  // hint per il browser durante il layout
                  style={{ contentVisibility: index > 5 ? "auto" : "visible", containIntrinsicSize: "350px 350px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2 sm:mb-3 line-clamp-2 leading-tight">
                  {equipment.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-sm mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                  {equipment.description}
                </p>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  <span className="text-orange-500 font-semibold">Target:</span> {equipment.targetMuscles}
                </div>
              </div>

              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500/30 rounded-full group-hover:bg-orange-500 group-hover:scale-150 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center px-4 sm:px-0">
          {!showAll ? (
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
              aria-label="Visualizza tutte le attrezzature Panatta disponibili"
            >
              <Wrench className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Scopri Tutte le Attrezzature
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">Hai visto tutte le nostre nuove attrezzature Panatta!</p>
              <Button
                onClick={() => setShowAll(false)}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                aria-label="Mostra meno attrezzature"
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
