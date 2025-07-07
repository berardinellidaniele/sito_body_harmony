"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crea il corpo dell'email
    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone}

Messaggio:
${formData.message}
    `.trim()

    // Crea il link mailto
    const mailtoLink = `mailto:srvnsberard@gmail.com?subject=Richiesta informazioni Body Harmony&body=${encodeURIComponent(emailBody)}`

    // Apri il client email
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500">Contattaci</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hai domande sui nostri servizi o vuoi iniziare il tuo percorso di body building? Siamo qui per aiutarti!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form di contatto */}
          <div className="bg-black p-8 rounded-lg border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Invia un Messaggio</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Il tuo nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                  placeholder="la-tua-email@esempio.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefono
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Il tuo numero di telefono"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Messaggio *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Scrivi qui il tuo messaggio..."
                />
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                <Send className="h-5 w-5 mr-2" />
                Invia Messaggio
              </Button>
            </form>
          </div>

          {/* Informazioni di contatto */}
          <div className="space-y-8">
            <div className="bg-black p-8 rounded-lg border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informazioni di Contatto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Telefono</p>
                    <a
                      href="tel:071 919 8353"
                      className="text-gray-300 hover:text-orange-500 transition-colors text-lg"
                    >
                      071 919 8353
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a
                      href="mailto:srvnsberard@gmail.com"
                      className="text-gray-300 hover:text-orange-500 transition-colors text-lg"
                    >
                      srvnsberard@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Indirizzo</p>
                    <p className="text-gray-300 text-lg">
                      Via Marina, 63
                      <br />
                      Marina Di Montemarciano, Marche
                      <br />
                      Italy 60018
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/10 p-8 rounded-lg border border-orange-500/20">
              <h4 className="text-xl font-semibold text-orange-500 mb-4">Orari di Contatto</h4>
              <p className="text-gray-300 leading-relaxed">
                Puoi contattarci durante gli orari di apertura della palestra. Rispondiamo alle email entro 24 ore e
                siamo sempre disponibili per informazioni sui nostri servizi e abbonamenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
