"use client"

import { useState, useEffect } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        const rect = element?.getBoundingClientRect()
        if (rect) {
          setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          })
        }
      }
    }

    if (element && window.innerWidth > 768) {
      element.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
        if (window.innerWidth > 768) {
          element.removeEventListener("mousemove", handleMouseMove)
        }
      }
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background parallax circles */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-orange-600/5 rounded-full blur-xl"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/3 rounded-full blur-xl"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="inline-block">Chi</span> <span className="text-orange-500 inline-block">Siamo</span>
          </h2>
          <h3 className="sr-only">Body Harmony - Centro Ufficiale Panatta Marina di Montemarciano</h3>
          <h4 className="sr-only">Palestra Body Building Professionale con Attrezzature Panatta</h4>
          <h5 className="sr-only">1000 metri quadri dedicati al Body Building nelle Marche</h5>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            <strong>Body Harmony</strong> è la <strong>migliore palestra di body building</strong> a{" "}
            <strong>Marina di Montemarciano</strong>, <strong>centro ufficiale Panatta</strong> con{" "}
            <strong>attrezzature professionali</strong> di ultima generazione e un ambiente dedicato esclusivamente agli
            appassionati di questo sport nelle <strong>Marche</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Immagine sinistra */}
          <div className="order-2 lg:order-1 sm:-translate-x-16 lg:-translate-x-24 transform">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src="/hulk.jpg"
                className="relative rounded-lg shadow-2xl w-full transition-all duration-700 group-hover:scale-105 group-hover:shadow-orange-500/20"
                alt="Hulk Body Harmony"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Testo a destra */}
          <div className="space-y-6 order-1 lg:order-2 px-4 sm:px-0">
            {/* Logo e scritta */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <div className="relative flex items-center">
                <img src="/logopanatta.png" className="h-12 sm:h-16 object-contain" alt="Logo Panatta" />
              </div>
              <div className="text-orange-500 text-lg sm:text-2xl font-bold text-center sm:text-left">
                CENTRO UFFICIALE
              </div>
            </div>

            {/* Paragrafi descrittivi */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              La nostra palestra rappresenta l'eccellenza nel body building, con attrezzature Panatta di ultima
              generazione e un ambiente dedicato esclusivamente agli appassionati di questo sport.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Non offriamo corsi di gruppo, ma ci concentriamo su quello che sappiamo fare meglio: fornire gli strumenti
              e l'ambiente perfetto per il body building serio e professionale.
            </p>

            {/* Filosofia */}
            <div className="bg-black/50 p-4 sm:p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/60 group">
              <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                La nostra filosofia
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">✨</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base group-hover:translate-x-1 transition-all duration-500">
                Crediamo che il body building sia un'arte che richiede dedizione, attrezzature di qualità e un ambiente
                professionale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
