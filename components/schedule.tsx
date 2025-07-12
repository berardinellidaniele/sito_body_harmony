"use client"

import { Clock, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

const schedule = [
  { day: "Lunedì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Martedì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Mercoledì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Giovedì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Venerdì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Sabato", hours: "08:30 - 18:30", isOpen: true },
  { day: "Domenica", hours: "09:00 - 13:00", isOpen: true },
  { day: "Festività", hours: "09:00 - 13:00", isOpen: true, special: true },
]

export function Schedule() {
  const [currentDay, setCurrentDay] = useState("")

  useEffect(() => {
    const getCurrentDay = () => {
      const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
      return days[new Date().getDay()]
    }
    setCurrentDay(getCurrentDay())
  }, [])

  return (
    <section id="schedule" className="py-12 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            I Nostri <span className="text-orange-500">Orari</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Siamo aperti <span className="text-orange-400 font-semibold">7 giorni su 7</span> per offrirti la massima
            flessibilità nei tuoi allenamenti
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg border border-orange-500/20 overflow-hidden">
            <div className="bg-orange-500 p-4 sm:p-6 text-center">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white mx-auto mb-2" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Orari di Apertura</h3>
            </div>

            <div className="p-4 sm:p-8">
              <div className="grid gap-3 sm:gap-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`relative p-3 sm:p-4 rounded-lg border transition-all duration-300 ${
                      item.special
                        ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/50"
                        : item.day === currentDay
                          ? "bg-orange-500/10 border-orange-500/40"
                          : "bg-gray-900/50 border-gray-700 hover:border-orange-500/30"
                    }`}
                  >
                    {/* Layout Mobile-First */}
                    <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
                      {/* Giorno e Orario */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span
                            className={`font-semibold text-sm sm:text-base ${
                              item.special ? "text-red-400" : item.day === currentDay ? "text-orange-500" : "text-white"
                            }`}
                          >
                            {item.day}
                          </span>
                        </div>
                        <span
                          className={`font-mono text-sm sm:text-base ml-4 ${
                            item.special
                              ? "text-red-400 font-bold"
                              : item.day === currentDay
                                ? "text-orange-500"
                                : "text-gray-300"
                          }`}
                        >
                          {item.hours}
                        </span>
                      </div>

                      {/* Badge - Separati su mobile */}
                      <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                        {item.day === currentDay && (
                          <span className="inline-flex items-center text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-medium">
                            Oggi
                          </span>
                        )}
                        {item.special && (
                          <span className="inline-flex items-center text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-pulse font-medium">
                            🎉 Sempre Aperti
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-black p-4 sm:p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <h4 className="text-lg sm:text-xl font-semibold text-orange-500 mb-3 sm:mb-4">Orari Estesi</h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Siamo aperti con orari estesi dal lunedì al venerdì per permetterti di allenarti prima del lavoro o dopo
                una lunga giornata.
              </p>
            </div>

            <div className="bg-black p-4 sm:p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <h4 className="text-lg sm:text-xl font-semibold text-orange-500 mb-3 sm:mb-4">Weekend Incluso</h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Anche nel weekend siamo a tua disposizione con orari dedicati per non interrompere mai la tua routine di
                allenamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
