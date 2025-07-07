"use client"

import { Check, Star, FlameIcon as Fire, Sun, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const membershipPlans = [
  {
    name: "Giornaliero",
    price: "€ 8",
    originalPrice: null,
    period: "al giorno",
    description: "Perfetto per chi vuole provare la palestra",
    features: [
      "Accesso completo alla palestra",
      "Utilizzo di tutte le attrezzature Panatta",
      "Supporto base dello staff",
      "Valido per 1 giorno",
    ],
    popular: false,
    promo: false,
  },
  {
    name: "Mensile",
    price: "€ 49",
    originalPrice: null,
    period: "al mese",
    description: "Ideale per chi inizia il percorso",
    features: [
      "Accesso completo alla palestra",
      "Utilizzo di tutte le attrezzature Panatta",
      "Supporto dello staff qualificato",
      "Valido per 30 giorni",
      "Flessibilità negli orari",
    ],
    popular: false,
    promo: false,
  },
  {
    name: "Trimestrale",
    price: "€ 125",
    originalPrice: null,
    period: "per 3 mesi",
    description: "La scelta più popolare per risultati costanti",
    features: [
      "Accesso illimitato alla palestra",
      "Utilizzo di tutte le attrezzature Panatta",
      "Consulenza personalizzata",
      "Supporto completo dei trainer",
      "Programmi di allenamento su misura",
      "Accesso prioritario negli orari di punta",
    ],
    popular: true,
    promo: false,
  },
  {
    name: "Annuale",
    price: "€ 298",
    originalPrice: "€ 325",
    period: "all'anno",
    description: "Il massimo risparmio per i più determinati",
    features: [
      "Accesso illimitato alla palestra",
      "Utilizzo di tutte le attrezzature Panatta",
      "Consulenza personalizzata premium",
      "Supporto completo dei trainer",
      "Programmi di allenamento personalizzati",
      "Accesso prioritario",
      "Sconti su servizi aggiuntivi",
      "Valutazioni periodiche gratuite",
    ],
    popular: false,
    promo: true,
  },
]

export function Membership() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setIsVisible(true)

    // Countdown per il 31 agosto 2025
    const targetDate = new Date("2025-08-31T23:59:59").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="membership" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/3 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I Nostri <span className="text-orange-500">Abbonamenti</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scegli l'abbonamento più adatto alle tue esigenze e inizia il tuo percorso di body building
          </p>

          {/* Nota Iscrizione */}
          <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <p className="text-gray-300">
              <span className="text-orange-400 font-semibold">Nota:</span> Tutti gli abbonamenti richiedono una{" "}
              <span className="text-orange-400 font-semibold">quota di iscrizione di €25</span> (una tantum)
            </p>
          </div>
        </div>

        {/* PROMOZIONE ESTIVA BANNER */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="relative bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-yellow-500/20 border-2 border-orange-500/40 rounded-2xl max-w-5xl mx-auto shadow-2xl shadow-orange-500/10">
            <div className="bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
              {/* Effetti di sfondo estivi */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-yellow-500/10"></div>

              {/* Decorazioni estive */}
              <div className="absolute top-4 right-4">
                <Sun className="h-8 w-8 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Waves className="h-6 w-6 text-blue-400 animate-pulse delay-1000" />
              </div>
              <div className="absolute top-6 left-6">
                <Fire className="h-6 w-6 text-red-500 animate-pulse delay-500" />
              </div>

              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-3xl mr-3">🏖️</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-orange-500 to-yellow-400 bg-clip-text">
                    SUPER PROMO ESTIVA
                  </h3>
                  <span className="text-3xl ml-3">☀️</span>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl mr-2">🌊</span>
                  <p className="text-xl text-white font-bold">
                    Abbonamento <span className="text-yellow-400">ANNUALE</span> a prezzo da spiaggia!
                  </p>
                  <span className="text-2xl ml-2">🏄‍♂️</span>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-yellow-500/20 rounded-xl p-6 mb-6 border border-orange-500/30">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl mr-3">🔥</span>
                    <span className="text-2xl font-bold text-yellow-400">€298</span>
                    <span className="text-lg text-gray-400 line-through ml-3 mr-3">€325</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold ml-3">-8%</span>
                  </div>
                  <p className="text-orange-300 font-semibold">
                    <span className="text-2xl mr-2">🎯</span>
                    Sconto speciale solo per l'estate!
                    <span className="text-2xl ml-2">🎉</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
                  <div className="bg-blue-500/15 rounded-lg p-3 border border-blue-500/30">
                    <div className="text-xl font-bold text-blue-400">{timeLeft.days}</div>
                    <div className="text-sm text-gray-300">Giorni</div>
                  </div>
                  <div className="bg-orange-500/15 rounded-lg p-3 border border-orange-500/30">
                    <div className="text-xl font-bold text-orange-400">{timeLeft.hours}</div>
                    <div className="text-sm text-gray-300">Ore</div>
                  </div>
                  <div className="bg-yellow-500/15 rounded-lg p-3 border border-yellow-500/30">
                    <div className="text-xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                    <div className="text-sm text-gray-300">Minuti</div>
                  </div>
                  <div className="bg-red-500/15 rounded-lg p-3 border border-red-500/30">
                    <div className="text-xl font-bold text-red-400 animate-pulse">{timeLeft.seconds}</div>
                    <div className="text-sm text-gray-300">Secondi</div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <span className="text-xl mr-2">⏰</span>
                  <p className="text-gray-300">
                    Offerta valida fino al <span className="text-orange-400 font-bold">31 Agosto 2025</span>
                  </p>
                  <span className="text-xl ml-2">🏖️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 hover:transform hover:scale-105 ${
                plan.promo
                  ? "bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-yellow-500/20 p-[2px] rounded-2xl shadow-lg shadow-orange-500/20"
                  : plan.popular
                    ? "bg-gradient-to-r from-orange-500/30 to-red-500/30 p-[1px] rounded-2xl ring-2 ring-orange-500/30 hover:ring-orange-500/50"
                    : "bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-[1px] hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20"
              }`}
            >
              {/* Badge Promozione Estiva */}
              {plan.promo && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg border-2 border-white/20 animate-pulse">
                    <span className="mr-1">🏖️</span>
                    PROMO ESTIVA
                    <span className="ml-1">☀️</span>
                  </div>
                </div>
              )}

              {/* Badge Popolare */}
              {plan.popular && !plan.promo && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg border-2 border-white/20">
                    <Star className="h-4 w-4 mr-1" />
                    Più Popolare
                  </div>
                </div>
              )}

              {/* Inner content */}
              <div
                className={`relative rounded-2xl p-8 h-full ${
                  plan.promo
                    ? "bg-gradient-to-br from-black via-gray-900 to-black"
                    : "bg-gradient-to-br from-gray-900 via-black to-gray-900"
                }`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    plan.promo
                      ? "bg-gradient-to-br from-blue-500/10 via-orange-500/10 to-yellow-500/10"
                      : plan.popular
                        ? "bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10"
                        : "bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"
                  }`}
                ></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        plan.promo
                          ? "text-transparent bg-gradient-to-r from-blue-400 via-orange-500 to-yellow-400 bg-clip-text"
                          : "text-white group-hover:text-orange-400"
                      }`}
                    >
                      {plan.name}
                    </h3>

                    <div className="mb-4">
                      {/* Prezzo scontato per promo con percentuale */}
                      {plan.originalPrice && (
                        <div className="flex items-center justify-center mb-2">
                          <span className="text-lg text-gray-500 line-through mr-2">{plan.originalPrice}</span>
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">-8%</span>
                        </div>
                      )}

                      <span
                        className={`text-4xl font-bold transition-colors duration-300 ${
                          plan.promo
                            ? "text-transparent bg-gradient-to-r from-blue-400 via-orange-500 to-yellow-400 bg-clip-text"
                            : plan.popular
                              ? "text-orange-500 group-hover:text-orange-400"
                              : "text-orange-500 group-hover:text-orange-400"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2 group-hover:text-gray-300 transition-colors duration-300">
                        {plan.period}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <Check
                          className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                            plan.promo ? "text-yellow-400" : "text-orange-500 group-hover:text-orange-400"
                          }`}
                        />
                        <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.promo
                        ? "bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500 hover:from-blue-600 hover:via-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-orange-500/25"
                        : plan.popular
                          ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-orange-500/25"
                          : "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent"
                    }`}
                    onClick={scrollToContact}
                  >
                    {plan.promo ? (
                      <>
                        <span className="mr-2">🏖️</span>
                        Approfitta della Promo!
                        <span className="ml-2">☀️</span>
                      </>
                    ) : (
                      `Scegli ${plan.name}`
                    )}
                  </Button>
                </div>

                {/* Corner decorations */}
                <div
                  className={`absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 transition-colors duration-300 rounded-tl-lg ${
                    plan.promo ? "border-yellow-400/50" : "border-orange-500/30 group-hover:border-orange-500"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 transition-colors duration-300 rounded-br-lg ${
                    plan.promo ? "border-blue-400/50" : "border-orange-500/30 group-hover:border-orange-500"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-900 p-8 rounded-lg border border-orange-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Hai Domande sui Nostri Abbonamenti?</h3>
            <p className="text-gray-300 mb-6">
              Contattaci per ricevere informazioni dettagliate e per trovare l'abbonamento perfetto per le tue esigenze
              di allenamento.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={scrollToContact}>
              Contattaci per Maggiori Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
