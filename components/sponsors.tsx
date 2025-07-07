"use client"

import { useEffect, useState } from "react"
import { Star, Award, Zap } from "lucide-react"

export function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)

  const sponsors = [
    {
      name: "Panatta",
      image: "/placeholder.svg?height=300&width=300",
      description: "Attrezzature professionali",
      color: "from-red-500 to-red-600",
      delay: "delay-200",
    },
    {
      name: "Prozis",
      image: "/placeholder.svg?height=300&width=300",
      description: "Integratori premium",
      color: "from-blue-500 to-blue-600",
      delay: "delay-400",
    },
    {
      name: "Marina Calcio",
      image: "/placeholder.svg?height=300&width=300",
      description: "Squadra locale",
      color: "from-green-500 to-green-600",
      delay: "delay-600",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="sponsors"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-600/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-orange-500 mr-3 animate-spin-slow" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              I Nostri <span className="text-orange-500">Partner</span>
            </h2>
            <Star className="h-8 w-8 text-orange-500 ml-3 animate-spin-slow" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Collaboriamo con i <span className="text-orange-400 font-semibold">migliori brand</span> per offrirti
            <span className="text-orange-400 font-semibold"> qualità eccellente</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`group relative bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 ${sponsor.delay} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}
              ></div>

              {/* Image Container - FULL SIZE */}
              <div className="relative aspect-square bg-white overflow-hidden">
                <img
                  src={sponsor.image || "/placeholder.svg"}
                  alt={`${sponsor.name} Partner`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-orange-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200">
                  <Award className="h-4 w-4 text-white" />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 text-center">
                  {sponsor.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium text-center">
                  {sponsor.description}
                </p>

                {/* Animated Line */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto transition-all duration-500 delay-100"></div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 max-w-3xl mx-auto">
            <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4">Partnership di Qualità</h3>
            <p className="text-gray-300 leading-relaxed">
              Ogni partnership è scelta per garantire ai nostri atleti{" "}
              <span className="text-orange-400 font-semibold">prodotti e servizi di eccellenza</span>, supportando il
              tuo percorso verso il successo nel body building.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
