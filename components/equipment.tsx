"use client"

import { useState } from "react"
import { equipmentData } from "@/data/equipment"
import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"

export function Equipment() {
  const [showAll, setShowAll] = useState(false)

  const displayedEquipment = showAll ? equipmentData : equipmentData.slice(0, 3)

  return (
    <section id="equipment" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Le Nostre <span className="text-orange-500">Attrezzature</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Macchinari Panatta di ultima generazione per il body building professionale
          </p>
          {/* Logo rimosso come richiesto */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedEquipment.map((equipment, index) => (
            <div
              key={index}
              className="group bg-black rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gray-900/80"
            >
              <div className="aspect-square bg-white p-4">
                <img
                  src={equipment.image || "/placeholder.svg"}
                  alt={equipment.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-3">
                  {equipment.name}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{equipment.description}</p>

                <div className="text-sm text-gray-500">
                  <span className="text-orange-500 font-semibold">Muscoli target:</span> {equipment.targetMuscles}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          {!showAll ? (
            <Button onClick={() => setShowAll(true)} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Wrench className="h-5 w-5 mr-2" />
              Scopri Tutte le Attrezzature
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-300">Hai visto tutte le nostre attrezzature Panatta!</p>
              <Button
                onClick={() => setShowAll(false)}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
              >
                Mostra Meno
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
