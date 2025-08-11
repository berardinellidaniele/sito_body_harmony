"use client"

import Image from "next/image"
import { Dumbbell, Users, Zap, Target, TrendingUp, Clock, Home } from "lucide-react"
import { useEffect, useState } from "react"
import heroBg from "@/public/images/gym-interior-1.jpg" // import locale = blur + dimensioni note a build

export function Hero() {
  const [currentStat, setCurrentStat] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: "1000m²", label: "Spazio totale", icon: Home },
    { number: "365", label: "Giorni all'anno", icon: Clock },
    { number: "50+", label: "Macchinari Panatta", icon: Dumbbell },
    { number: "24/7", label: "Supporto disponibile", icon: Target },
  ] as const

  useEffect(() => {
    setIsVisible(true)
    const id = setInterval(() => setCurrentStat((p) => (p + 1) % stats.length), 3000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const StatIcon = stats[currentStat].icon

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pb-20"
    >
      {/* Background ottimizzato (LCP) */}
      <div className="absolute inset-0 -z-[1]">
        <Image
          src={heroBg}
          alt=""
          role="presentation"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover opacity-30 select-none"
          draggable={false}
        />
      </div>

      {/* Layer scuro sopra l'immagine */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Stat flottante */}
      <div className="absolute top-20 right-10 hidden lg:block z-[2]">
        <div
          className={`bg-black/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center space-x-3">
            <StatIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
            <div>
              <div className="text-2xl font-bold text-white">{stats[currentStat].number}</div>
              <div className="text-sm text-gray-300">{stats[currentStat].label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenuto */}
      <div className="relative z-[2] text-center max-w-5xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 mt-24 relative">
            <span className="relative inline-block">
              BODY
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 animate-[scaleX_2s_ease-in-out_1s_forwards] origin-left" />
            </span>
            <br />
            <span className="text-orange-500 relative inline-block">
              HARMONY
              <Zap className="absolute -top-2 -right-8 h-8 w-8 text-orange-400 animate-bounce delay-2000" aria-hidden="true" />
            </span>
          </h1>

          {/* Headings SEO-only */}
          <h2 className="sr-only">Palestra Body Building Marina di Montemarciano - Centro Ufficiale Panatta</h2>
          <h3 className="sr-only">
            Body Harmony: La Migliore Palestra delle Marche con Trainer Esperti Fabio e Massimo Pietrobon Gobbi
          </h3>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-3xl text-orange-500 font-bold mb-4 relative">
            <TrendingUp className="inline-block h-6 w-6 mr-2 animate-pulse" aria-hidden="true" />
            Trasforma il tuo corpo, supera i tuoi limiti
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            La <strong>migliore palestra di body building</strong> a <strong>Marina di Montemarciano</strong>,{" "}
            <span className="text-orange-400 font-semibold">centro ufficiale Panatta</span> con{" "}
            <span className="text-orange-400 font-semibold">1000m² di spazio</span> e{" "}
            <span className="text-orange-400 font-semibold">attrezzature professionali</span>. Trainer esperti{" "}
            <strong>Fabio e Massimo Pietrobon Gobbi</strong> per raggiungere i tuoi obiettivi.
          </p>
        </div>

        {/* Box “Sempre aperti” */}
        <div
          className={`bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border-2 border-orange-500/50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-800 hover:scale-105 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-3">
            <Clock className="h-8 w-8 text-orange-400 mr-3 animate-pulse" aria-hidden="true" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">SEMPRE APERTI</h3>
            <Clock className="h-8 w-8 text-orange-400 ml-3 animate-pulse" aria-hidden="true" />
          </div>
          <p className="text-orange-300 font-semibold text-lg">7 giorni su 7 - 365 giorni all&apos;anno</p>
          <p className="text-gray-300 mt-2">
            <span className="text-orange-400 font-semibold">Anche nelle festività!</span> La nostra palestra non si ferma mai
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scrollToSection("membership")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 rounded-md"
          >
            <Zap className="h-5 w-5 mr-2 inline" aria-hidden="true" />
            Scopri i prezzi
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 rounded-md"
          >
            <Target className="h-5 w-5 mr-2 inline" aria-hidden="true" />
            Vieni a trovarci
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div
            className={`flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/60 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full mb-4 shadow-lg">
              <Dumbbell className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Attrezzature Panatta</h3>
            <p className="text-gray-400 text-center leading-relaxed">Macchinari professionali di ultima generazione</p>
          </div>

          <div
            className={`flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/60 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full mb-4 shadow-lg">
              <Home className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">1000m² di spazio</h3>
            <p className="text-gray-400 text-center leading-relaxed">Ampio spazio dedicato al body building</p>
          </div>

          <div
            className={`flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/60 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full mb-4 shadow-lg">
              <Users className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Trainer Esperti</h3>
            <p className="text-gray-400 text-center leading-relaxed">Professionisti del body building</p>
          </div>
        </div>
      </div>
    </section>
  )
}
