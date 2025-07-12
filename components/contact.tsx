"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, User, MessageSquare, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Errore invio email:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-6">
            <MessageSquare className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Contattaci
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hai domande sui nostri servizi o vuoi iniziare il tuo percorso di body building?
            <br className="hidden sm:block" />
            <span className="text-orange-400 font-medium">Siamo qui per aiutarti!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form di contatto */}
          <div className="relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl"></div>

            <div className="relative bg-black/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-orange-500/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4">
                  <Send className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Invia un Messaggio</h3>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-green-400 font-medium">Messaggio inviato con successo!</p>
                      <p className="text-green-300/80 text-sm">Ti risponderemo entro 24 ore</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                      <AlertCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-red-400 font-medium">Errore nell'invio del messaggio</p>
                      <p className="text-red-300/80 text-sm">Riprova o contattaci direttamente.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="group">
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <User className="h-4 w-4 mr-2 text-orange-500" />
                    Nome Completo *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-700/50 text-white focus:border-orange-500 focus:ring-orange-500/20 h-12 rounded-xl transition-all duration-200 group-hover:border-gray-600"
                    placeholder="Il tuo nome completo"
                    disabled={isLoading}
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <Mail className="h-4 w-4 mr-2 text-orange-500" />
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-700/50 text-white focus:border-orange-500 focus:ring-orange-500/20 h-12 rounded-xl transition-all duration-200 group-hover:border-gray-600"
                    placeholder="la-tua-email@esempio.com"
                    disabled={isLoading}
                  />
                </div>

                {/* Telefono */}
                <div className="group">
                  <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <Phone className="h-4 w-4 mr-2 text-orange-500" />
                    Telefono
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-700/50 text-white focus:border-orange-500 focus:ring-orange-500/20 h-12 rounded-xl transition-all duration-200 group-hover:border-gray-600"
                    placeholder="Il tuo numero di telefono"
                    disabled={isLoading}
                  />
                </div>

                {/* Messaggio */}
                <div className="group">
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <MessageSquare className="h-4 w-4 mr-2 text-orange-500" />
                    Messaggio *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-700/50 text-white focus:border-orange-500 focus:ring-orange-500/20 rounded-xl transition-all duration-200 group-hover:border-gray-600 resize-none"
                    placeholder="Scrivi qui il tuo messaggio..."
                    disabled={isLoading}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold h-12 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-3" />
                      Invia Messaggio
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Informazioni di contatto */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contatti principali */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl"></div>
              <div className="relative bg-black/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-orange-500/20 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Informazioni di Contatto</h3>
                </div>

                <div className="space-y-6">
                  {/* Telefono */}
                  <div className="flex items-start group cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-500/20 transition-colors">
                      <Phone className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Telefono</p>
                      <a
                        href="tel:071 919 8353"
                        className="text-gray-300 hover:text-orange-500 transition-colors text-lg font-medium"
                      >
                        071 919 8353
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-500/20 transition-colors">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Email</p>
                      <a
                        href="mailto:newbodyharmony@libero.it"
                        className="text-gray-300 hover:text-orange-500 transition-colors text-lg font-medium"
                      >
                        newbodyharmony@libero.it
                      </a>
                    </div>
                  </div>

                  {/* Indirizzo */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-500/20 transition-colors">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Indirizzo</p>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Via Marina, 63
                        <br />
                        Marina Di Montemarciano, Marche
                        <br />
                        <span className="text-orange-400">Italy 60018</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orari di contatto */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl"></div>
              <div className="relative bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-6 sm:p-8 rounded-2xl border border-orange-500/20 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-orange-400">Orari di Contatto</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Puoi contattarci durante gli orari di apertura della palestra.
                  <span className="text-orange-400 font-medium"> Rispondiamo alle email entro 24 ore</span> e siamo
                  sempre disponibili per informazioni sui nostri servizi e abbonamenti.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 sm:p-8 rounded-2xl border border-blue-500/20 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">💡</div>
                  <h4 className="text-xl font-semibold text-blue-400">Suggerimento</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Per una <span className="text-blue-400 font-medium">risposta più rapida</span>, chiamaci direttamente
                  durante gli orari di apertura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
