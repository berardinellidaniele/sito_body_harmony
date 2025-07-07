"use client"

import { useState, useEffect } from "react"
import { equipmentData } from "@/data/equipment"
import { Button } from "@/components/ui/button"
import { Wrench, Sparkles, Zap, Star } from "lucide-react"

export function Equipment() {
  const [showAll, setShowAll] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const displayedEquipment = showAll ? equipmentData : equipmentData.slice(0, 6)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("equipment")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="equipment" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-600/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/3 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Le Nostre{" "}
              <span className="relative inline-block">
                <span className="text-orange-500 relative z-10">NUOVE</span>

                {/* Glow Effect dietro NUOVE */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-lg rounded-lg animate-pulse"></div>

                {/* Sparkles intorno a NUOVE - Responsive */}
                <Sparkles className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 h-4 w-4 sm:h-6 sm:w-6 text-yellow-400 animate-bounce delay-300" />
                <Sparkles className="absolute -top-1 sm:-top-1 -right-2 sm:-right-3 h-3 w-3 sm:h-4 sm:w-4 text-orange-400 animate-bounce delay-700" />
                <Sparkles className="absolute -bottom-1 sm:-bottom-2 -left-1 h-4 w-4 sm:h-5 sm:w-5 text-red-400 animate-bounce delay-1000" />
                <Sparkles className="absolute -bottom-1 -right-1 sm:-right-2 h-2 w-2 sm:h-3 sm:w-3 text-yellow-300 animate-bounce delay-500" />

                {/* Zap effects - Responsive */}
                <Zap className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 h-4 w-4 sm:h-5 sm:w-5 text-orange-400 animate-ping delay-200" />
                <Zap className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-3 w-3 sm:h-4 sm:w-4 text-red-400 animate-ping delay-800" />

                {/* Stars - Responsive */}
                <Star className="absolute top-0 right-0 h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 animate-pulse delay-400" />
                <Star className="absolute bottom-0 left-0 h-2 w-2 sm:h-3 sm:w-3 text-orange-300 animate-pulse delay-900" />

                {/* Linea animata sotto NUOVE */}
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full animate-ping"></div>
              </span>{" "}
              <span className="text-orange-500">Attrezzature</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 hover:text-gray-200 transition-colors duration-300 px-4 sm:px-0">
            <span className="text-orange-400 font-semibold">Macchinari Panatta</span> di ultima generazione per il{" "}
            <span className="text-orange-400 font-semibold">body building professionale</span>
          </p>
        </div>

        {/* Equipment Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {displayedEquipment.map((equipment, index) => (
            <div
              key={index}
              className={`group bg-black rounded-xl sm:rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/60 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/25 hover:bg-gray-900/90 delay-${
                (index + 1) * 100
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Image Container - Responsive */}
              <div className="aspect-square bg-white relative overflow-hidden">
                <img
                  src={equipment.image || "/placeholder.svg"}
                  alt={equipment.name}
                  className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 p-3 sm:p-4"
                />

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content - Responsive Padding and Text */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2 sm:mb-3 line-clamp-2 leading-tight">
                  {equipment.name}
                </h3>

                <p className="text-gray-300 text-sm sm:text-sm mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                  {equipment.description}
                </p>

                <div className="text-xs sm:text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  <span className="text-orange-500 font-semibold">Target:</span> {equipment.targetMuscles}
                </div>
              </div>

              {/* Subtle Corner Accent */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500/30 rounded-full group-hover:bg-orange-500 group-hover:scale-150 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button - Responsive */}
        <div className="text-center px-4 sm:px-0">
          {!showAll ? (
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
            >
              <Wrench className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Scopri Tutte le Attrezzature
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">Hai visto tutte le nostre attrezzature Panatta!</p>
              <Button
                onClick={() => setShowAll(false)}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
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
