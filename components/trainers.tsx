"use client"

import { Award, Trophy, Instagram, Facebook, Star, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const trainers = [
  {
    name: "Fabio Pietrobon Gobbi",
    role: "Proprietario & Head Trainer",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Proprietario della palestra Body Harmony e trainer esperto con numerose vittorie in competizioni di body building.",
    achievements: [
      "Proprietario Body Harmony",
      "Vincitore di numerose gare di body building",
      "Esperienza pluriennale nel settore",
      "Specialista in preparazione atletica",
    ],
    social: {
      instagram: "#",
      facebook: "#",
    },
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Massimo Pietrobon Gobbi",
    role: "Trainer & Influencer",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Trainer esperto e noto influencer nel mondo del fitness e body building, con un grande seguito sui social media.",
    achievements: [
      "Influencer riconosciuto nel fitness",
      "Esperto in tecniche di allenamento avanzate",
      "Preparatore per competizioni",
      "Content creator specializzato",
    ],
    social: {
      instagram: "#",
      facebook: "#",
    },
    gradient: "from-orange-500 to-yellow-500",
  },
]

export function Trainers() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="trainers"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-600/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/3 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-orange-500 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              I Nostri <span className="text-orange-500">Trainer</span>
            </h2>
            <Star className="h-8 w-8 text-orange-500 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-orange-400 font-semibold">Professionisti esperti</span> che ti guideranno nel tuo
            percorso di <span className="text-orange-400 font-semibold">body building</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`group relative bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/60 transition-all duration-700 hover:transform hover:scale-105 delay-${
                (index + 1) * 200
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${trainer.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
              ></div>

              {/* Image Section */}
              <div className="relative aspect-square bg-gray-800 overflow-hidden">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Social Media Overlay */}
                <div className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <a
                    href={trainer.social.instagram}
                    className="bg-black/80 backdrop-blur-sm p-3 rounded-full border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="h-5 w-5 text-white hover:text-orange-400" />
                  </a>
                  <a
                    href={trainer.social.facebook}
                    className="bg-black/80 backdrop-blur-sm p-3 rounded-full border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook className="h-5 w-5 text-white hover:text-orange-400" />
                  </a>
                </div>

                {/* Role Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30">
                  <p className="text-orange-500 font-semibold text-sm">{trainer.role}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 relative">
                {/* Name and Trophy */}
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-full mr-4 shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {trainer.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {trainer.description}
                </p>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-orange-500 font-semibold mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Competenze e Risultati
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {trainer.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start bg-black/40 p-3 rounded-lg border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300"
                      >
                        <Zap className="h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Line */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mt-6 transition-all duration-700 delay-300"></div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
