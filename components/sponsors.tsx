"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Star, Award, Zap } from "lucide-react"

import panatta from "@/public/panatta.png"
import prozis from "@/public/prozis.png"
import marinacalcio from "@/public/marinacalcio.png"

type Sponsor = {
  name: string
  image: typeof panatta
  description: string
  color: string
  delay: string
  bgColor: string
}

export function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)

  const sponsors: Sponsor[] = [
    {
      name: "Panatta",
      image: panatta,
      description: "Attrezzature professionali",
      color: "from-red-500 to-red-600",
      delay: "delay-200",
      bgColor: "bg-white",
    },
    {
      name: "Prozis",
      image: prozis,
      description: "Integratori premium",
      color: "from-gray-800 to-black",
      delay: "delay-400",
      bgColor: "bg-black",
    },
    {
      name: "Marina Calcio",
      image: marinacalcio,
      description: "Squadra locale",
      color: "from-blue-500 to-blue-600",
      delay: "delay-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-white",
    },
  ]

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="sponsors"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-600/5 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sponsors.map((s, index) => (
            <div
              key={s.name}
              className={`group relative bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 ${s.delay} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}
              />

              {/* Image Container — ottimizzato per loghi */}
              <div className={`relative aspect-square ${s.bgColor} overflow-hidden flex items-center justify-center p-6`}>
                <Image
                  src={s.image}
                  alt={`${s.name} Partner`}
                  // Dimensioni massime del contenitore: usiamo width/height per riservare spazio,
                  // + sizes per servire versioni ridotte su mobile
                  width={300}
                  height={300}
                  sizes="(min-width: 768px) 300px, 70vw"
                  placeholder="blur"
                  loading="lazy"
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-orange-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200">
                  <Award className="h-4 w-4 text-white" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 text-center">
                  {s.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium text-center">
                  {s.description}
                </p>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto transition-all duration-500 delay-100" />
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
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
