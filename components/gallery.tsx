"use client"

import { useState, useEffect } from "react"
import { Grid3X3, Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto1.jpg-Jqv9I5RduEd2HTXh5bgwevMeEpY6HM.jpeg",
    alt: "Vista panoramica della palestra Body Harmony",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto3.jpg-5eP0xwmqI2j7OT9KLDN6kr7x8MzkED.jpeg",
    alt: "Area pesi liberi e manubri",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto4.jpg-TtaM73MmtSB4p9WeFdkEiBokMY7juo.jpeg",
    alt: "Layout completo della palestra",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto5.jpg-wXTk9piNOo479aXoSQh09Y7JtQz6fl.jpeg",
    alt: "Atleti in allenamento",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto6.jpg-4iuk5iBIPiaPHvyI7Xn4dGQaNXbzoG.jpeg",
    alt: "Area cardio con vista mare",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto7.jpg-R1DtlbcvTK4XXDTAoRYxAgdGyetwVv.jpeg",
    alt: "Reception e area accoglienza",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto8.jpg-w2Tj64UpZU8kdnkYdDo2YOmBpH4mSb.jpeg",
    alt: "Attrezzature Panatta professionali",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto9.jpg-GRBko3T4ZmuNFIsonw4EPwz1lIljwt.jpeg",
    alt: "Palestra durante l'allenamento",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto10.jpg-0TKp6gQQJpt65TfuwkFIjvVcu9OZtw.jpeg",
    alt: "Vista completa con atleti",
  },
]

export function Gallery() {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)

    // Preload delle prime 3 immagini per performance migliori
    galleryImages.slice(0, 3).forEach((image) => {
      const img = new Image()
      img.src = image.src
    })

    return () => clearTimeout(timer)
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % displayedImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? displayedImages.length - 1 : selectedImage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "ArrowLeft") prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-orange-600/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-orange-400/3 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            La Nostra <span className="text-orange-500">Galleria</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Scopri gli spazi e l'atmosfera della palestra{" "}
            <span className="text-orange-400 font-semibold">Body Harmony</span>
          </p>
        </div>

        {/* Simple Grid Layout - Just Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`group bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/60 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/25 cursor-pointer delay-${
                (index + 1) * 100
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`${image.alt} - Body Harmony Marina di Montemarciano`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index < 3 ? "high" : "auto"}
                  width="382"
                  height="215"
                />

                {/* Simple Overlay with View Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-orange-500/90 backdrop-blur-sm p-3 sm:p-4 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500/30 rounded-full group-hover:bg-orange-500 group-hover:scale-150 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center px-4">
          {!showAll ? (
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
              aria-label="Visualizza tutte le foto della palestra Body Harmony"
            >
              <Grid3X3 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Visualizza Tutte le Foto
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">Hai visto tutte le nostre foto!</p>
              <Button
                onClick={() => setShowAll(false)}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
                aria-label="Mostra meno foto"
              >
                Mostra Meno
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Chiudi galleria"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Immagine successiva"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Image */}
            <div className="relative max-w-full max-h-full">
              <img
                src={displayedImages[selectedImage].src || "/placeholder.svg"}
                alt={`${displayedImages[selectedImage].alt} - Body Harmony Marina di Montemarciano`}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="eager"
                decoding="async"
              />

              {/* Simple Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm">
                  {selectedImage + 1} di {displayedImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
