import { Dumbbell, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrizione */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <div className="text-2xl font-bold text-white">Body Harmony</div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Centro ufficiale Panatta specializzato nel body building professionale. Attrezzature di ultima generazione
              e trainer esperti per raggiungere i tuoi obiettivi.
            </p>
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=40&width=80" alt="Panatta Logo" className="h-8 opacity-80" />
              <span className="text-orange-500 font-semibold">CENTRO UFFICIALE</span>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-orange-500 mr-3" />
                <a href="tel:071 919 8353" className="text-gray-300 hover:text-orange-500 transition-colors">
                  071 919 8353
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-orange-500 mr-3" />
                <a
                  href="mailto:srvnsberard@gmail.com"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  srvnsberard@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-orange-500 mr-3 mt-1" />
                <div className="text-gray-300">
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
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Orari</h3>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-300">Lun - Ven:</span>
                <span className="text-orange-500">08:30 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sabato:</span>
                <span className="text-orange-500">08:30 - 18:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Dom/Fest:</span>
                <span className="text-orange-500">09:00 - 13:00</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">Seguici</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <MapPin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm">© 2025 Daniele Berardinelli. Fatto con il ❤️ </div>
          </div>
        </div>
      </div>
    </footer> 
  )
}
