import { Zap, Shield, Clock, Target, Trophy, Heart } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Attrezzature Professionali",
      description: "Macchinari Panatta di ultima generazione per allenamenti efficaci",
    },
    {
      icon: Shield,
      title: "Sicurezza Garantita",
      description: "Ambiente sicuro con attrezzature certificate e armadietti",
    },
    {
      icon: Clock,
      title: "Orari Flessibili",
      description: "Aperti 7 giorni su 7 con orari estesi per ogni esigenza",
    },
    {
      icon: Target,
      title: "Focus Body Building",
      description: "Specializzati principalmente nel body building professionale",
    },
    {
      icon: Trophy,
      title: "Trainer Esperti",
      description: "Staff qualificato con esperienza nelle competizioni",
    },
    {
      icon: Heart,
      title: "Ambiente Motivante",
      description: "Atmosfera professionale che ispira e motiva ogni allenamento",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perché Scegliere <span className="text-orange-500">Body Harmony</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scopri tutti i vantaggi di allenarti nella nostra palestra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-[1px] rounded-2xl hover:p-[2px] transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Inner content */}
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 rounded-2xl h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-orange-500/20">
                      <IconComponent className="h-8 w-8 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-orange-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300 rounded-tl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300 rounded-br-lg"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
