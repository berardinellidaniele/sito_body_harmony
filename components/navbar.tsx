"use client"

import { useState } from "react"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Chi Siamo", id: "about" },
    { label: "Attrezzature", id: "equipment" },
    { label: "Galleria", id: "gallery" },
    { label: "Trainer", id: "trainers" },
    { label: "Abbonamenti", id: "membership" },
    { label: "Orari", id: "schedule" },
    { label: "Dove Siamo", id: "location" },
    { label: "Partner", id: "sponsors" },
    { label: "Contatti", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 backdrop-blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo migliorato */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
              Body Harmony
            </div>
          </div>

          {/* Desktop Menu migliorato */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group overflow-hidden"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-300 rounded-lg"></div>
                  {/* Border gradient on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/20 via-transparent to-red-500/20 p-[1px]">
                    <div className="w-full h-full bg-black/50 rounded-lg"></div>
                  </div>
                  <span className="relative z-10">{item.label}</span>
                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button migliorato */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-white hover:text-orange-500 bg-white/5 hover:bg-orange-500/10 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu migliorato */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-xl rounded-b-2xl border-x border-b border-orange-500/20 mt-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white block px-4 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 border border-transparent hover:border-orange-500/20"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
