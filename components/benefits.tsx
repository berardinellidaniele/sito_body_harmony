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
      description: "Ambiente sicuro con attrezzature certificate e manutenute",
    },
    {
      icon: Clock,
      title: "Orari Flessibili",
      description: "Aperti 6 giorni su 7 con orari estesi per ogni esigenza",
    },
    {
      icon: Target,
      title: "Focus Body Building",
      description: "Specializzati esclusivamente nel body building professionale",
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
            Scopri tutti i vantaggi di allenarti nel nostro centro ufficiale Panatta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-6 mx-auto">
                  <IconComponent className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
