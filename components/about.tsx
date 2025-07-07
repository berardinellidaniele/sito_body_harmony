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

    // Mouse tracking solo su desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        // Solo desktop
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
      {/* Background Effects with Mouse Parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-orange-600/5 rounded-full blur-xl animate-pulse delay-1000 transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/3 rounded-full blur-xl animate-pulse delay-2000 transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group">
            <span className="inline-block transition-transform duration-300 group-hover:scale-105">Chi</span>{" "}
            <span className="text-orange-500 relative inline-block transition-transform duration-300 group-hover:scale-105">
              Siamo
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 animate-[scaleX_1.5s_ease-in-out_0.5s_forwards] origin-left"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-2000"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-gray-200 transition-all duration-500 hover:scale-105">
            Body Harmony è il centro ufficiale Panatta di Marina di Montemarciano, dedicato esclusivamente al body
            building professionale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 order-2 lg:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Immagine con padding mobile */}
            <div className="relative group px-4 sm:px-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src="/images/hulk-entrance.jpg"
                alt="Ingresso Body Harmony con statua Hulk"
                className="relative rounded-lg shadow-2xl w-full transition-all duration-700 group-hover:scale-105 group-hover:shadow-orange-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-500 order-1 lg:order-2 px-4 sm:px-0 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Logo section responsive */}
            <div
              className={`flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 transition-all duration-700 delay-700 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=80&width=160"
                  alt="Panatta Logo"
                  className="h-12 sm:h-16 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-orange-500/10 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-orange-500 text-lg sm:text-2xl font-bold relative group-hover:text-orange-400 transition-colors duration-300 text-center sm:text-left">
                CENTRO UFFICIALE
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
                <div className="absolute -top-1 -right-2 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Paragrafi con hover mobile-friendly */}
            <div
              className={`transition-all duration-700 delay-900 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed hover:text-gray-200 transition-all duration-500 sm:hover:translate-x-2 sm:hover:pl-4 border-l-2 border-transparent sm:hover:border-orange-500/50">
                La nostra palestra rappresenta l'eccellenza nel body building, con attrezzature Panatta di ultima
                generazione e un ambiente dedicato esclusivamente agli appassionati di questo sport.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-1100 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed hover:text-gray-200 transition-all duration-500 sm:hover:translate-x-2 sm:hover:pl-4 border-l-2 border-transparent sm:hover:border-orange-500/50">
                Non offriamo corsi di gruppo, ma ci concentriamo su quello che sappiamo fare meglio: fornire gli
                strumenti e l'ambiente perfetto per il body building serio e professionale.
              </p>
            </div>

            {/* Card filosofia responsive */}
            <div
              className={`bg-black/50 p-4 sm:p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/60 group delay-1300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mb-3 flex items-center group-hover:text-orange-400 transition-colors duration-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></span>
                La Nostra Filosofia
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">✨</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base hover:text-gray-200 transition-all duration-500 group-hover:translate-x-1">
                Crediamo che il body building sia un'arte che richiede dedizione, attrezzature di qualità e un ambiente
                professionale. Per questo abbiamo scelto di essere un centro specializzato Panatta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
