import { Dumbbell, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-orange-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-10 w-20 h-20 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-5 right-10 w-24 h-24 bg-orange-600/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrizione */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Body Harmony
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md text-sm">
              La palestra di Marina di Montemarciano specializzata nel body building professionale con attrezzature
              Panatta di ultima generazione.
            </p>
          </div>

          {/* Contatti */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-2"></div>
              Contatti
            </h3>
            <div className="space-y-3">
              <div className="flex items-center group">
                <Phone className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                <a
                  href="tel:071 919 8353"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  071 919 8353
                </a>
              </div>

              <div className="flex items-center group">
                <Mail className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:newbodyharmony@libero.it"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  newbodyharmony@libero.it
                </a>
              </div>

              <div className="flex items-start group">
                <MapPin className="h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Via Marina, 63
                  <br />
                  Marina Di Montemarciano
                  <br />
                  Marche, Italy 60018
                </div>
              </div>
            </div>
          </div>

          {/* Orari e Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-2"></div>
              Orari & Social
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Lun - Ven:</span>
                <span className="text-orange-500 font-medium">08:30 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sabato:</span>
                <span className="text-orange-500 font-medium">08:30 - 18:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Dom/Fest:</span>
                <span className="text-orange-500 font-medium">09:00 - 13:00</span>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Seguici</h4>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="bg-gray-800/50 hover:bg-orange-500/20 p-2 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-4 w-4 text-gray-400 hover:text-orange-500 transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800/50 hover:bg-orange-500/20 p-2 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-4 w-4 text-gray-400 hover:text-orange-500 transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800/50 hover:bg-orange-500/20 p-2 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110"
                >
                  <TikTokIcon className="h-4 w-4 text-gray-400 hover:text-orange-500 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider più sottile */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-500 text-xs text-center md:text-left">
              © 2025 Body Harmony. Tutti i diritti riservati.
            </div>
            <div className="text-gray-500 text-xs text-center md:text-right">
              Sviluppato da <span className="text-orange-500 font-medium">Daniele Berardinelli</span> con il{" "}
              <span className="text-red-500">❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
