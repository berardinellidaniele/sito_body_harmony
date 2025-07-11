import { Clock, Calendar } from "lucide-react"

const schedule = [
  { day: "Lunedì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Martedì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Mercoledì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Giovedì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Venerdì", hours: "08:30 - 21:00", isOpen: true },
  { day: "Sabato", hours: "08:30 - 18:30", isOpen: true },
  { day: "Domenica", hours: "08:30 - 13:00", isOpen: true },
  { day: "Festività", hours: "08:30 - 13:00", isOpen: true, special: true },
]

export function Schedule() {
  const getCurrentDay = () => {
    const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
    return days[new Date().getDay()]
  }

  const currentDay = getCurrentDay()

  return (
    <section id="schedule" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I Nostri <span className="text-orange-500">Orari</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siamo aperti <span className="text-orange-400 font-semibold">7 giorni su 7</span> per offrirti la massima
            flessibilità nei tuoi allenamenti
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg border border-orange-500/20 overflow-hidden">
            <div className="bg-orange-500 p-6 text-center">
              <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">Orari di Apertura</h3>
            </div>

            <div className="p-8">
              <div className="grid gap-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-lg border transition-all duration-300 ${
                      item.special
                        ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/50 ring-2 ring-red-500/30"
                        : item.day === currentDay
                          ? "bg-orange-500/10 border-orange-500/40 ring-1 ring-orange-500/20"
                          : "bg-gray-900/50 border-gray-700 hover:border-orange-500/30"
                    }`}
                  >
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-orange-500 mr-3" />
                      <span
                        className={`font-semibold ${
                          item.special ? "text-red-400" : item.day === currentDay ? "text-orange-500" : "text-white"
                        }`}
                      >
                        {item.day}
                        {item.day === currentDay && (
                          <span className="ml-2 text-sm bg-orange-500 text-white px-2 py-1 rounded-full">Oggi</span>
                        )}
                        {item.special && (
                          <span className="ml-2 text-sm bg-red-500 text-white px-2 py-1 rounded-full animate-pulse">
                            🎉 SEMPRE APERTI
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-mono ${
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
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <h4 className="text-xl font-semibold text-orange-500 mb-4">Orari Estesi</h4>
              <p className="text-gray-300 leading-relaxed">
                Siamo aperti con orari estesi dal lunedì al venerdì per permetterti di allenarti prima del lavoro o dopo
                una lunga giornata.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <h4 className="text-xl font-semibold text-orange-500 mb-4">Weekend Incluso</h4>
              <p className="text-gray-300 leading-relaxed">
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
