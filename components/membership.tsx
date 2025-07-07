"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const membershipPlans = [
  {
    name: "Giornaliero",
    price: "€ --",
    period: "al giorno",
    description: "Perfetto per chi vuole provare la palestra",
    features: [
      "Accesso completo alla palestra",
      "Utilizzo di tutte le attrezzature Panatta",
      "Supporto base dello staff",
      "Valido per 1 giorno",
    ],
    popular: false,
  },
  {
    name: "Settimanale",
    price: "€ --",
    period: "a settimana",
    description: "Ideale per periodi brevi o vacanze",
    features: [
      "Accesso completo alla palestra",
      "Utilizzo di tutte le attrezzature Panatta",
      "Supporto dello staff qualificato",
      "Valido per 7 giorni consecutivi",
      "Flessibilità negli orari",
    ],
    popular: false,
  },
  {
    name: "Mensile",
    price: "€ --",
    period: "al mese",
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
  },
  {
    name: "Annuale",
    price: "€ --",
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
  },
]

export function Membership() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="membership" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I Nostri <span className="text-orange-500">Abbonamenti</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scegli l'abbonamento più adatto alle tue esigenze e inizia il tuo percorso di body building
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-lg p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? "border-orange-500 ring-2 ring-orange-500/20"
                  : "border-orange-500/20 hover:border-orange-500/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Più Popolare
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-orange-500">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                }`}
                onClick={scrollToContact}
              >
                Scegli {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-900 p-8 rounded-lg border border-orange-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Hai Domande sui Nostri Abbonamenti?</h3>
            <p className="text-gray-300 mb-6">
              Contattaci per ricevere informazioni dettagliate sui prezzi e per trovare l'abbonamento perfetto per le
              tue esigenze di allenamento.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={scrollToContact}>
              Contattaci per i Prezzi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
