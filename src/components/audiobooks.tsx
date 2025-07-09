"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Audiobooks() {
  const audiobooks = [
    {
      description: "Lesões musculares, ligamentares, articulares, fraturas, pós-operatório",
      name: "Ortopedia",
      image: "/orto.png",
    },
    {
      description: "AVC, Parkinson, esclerose múltipla, lesões medulares, paralisia cerebral",
      name: "Neurologia",
      image: "/neuro.png",
    },
    {
      description: "DPOC, asma, fibrose cística, pós-operatório de cirurgias torácicas",
      name: "Respiratória",
      image: "/resp.png",
    },
  ]

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/dna1.jpg" alt="DNA Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossos Audiobooks</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aprenda enquanto se exercita, dirige ou relaxa. Ciência que respira com você:
            conteúdos em áudio sobre fisioterapia cardiorrespiratória e uma vida mais saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {audiobooks.map((audiobook, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative h-64">
                <Image
                  src={audiobook.image || "/placeholder.svg"}
                  alt={audiobook.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{audiobook.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{audiobook.description}</p>
                </div>
                <div className="flex justify-center">
                  <Link href={`/audiobooks/biblioteca ${audiobook.image.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/audiobooks/biblioteca">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Ver Todos os Audiobooks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
