"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Ebooks() {
  const ebooks = [
    {
      title: "Alimentação Saudável +50",
      image: "/nutri.jpeg",
      rating: 4.9,
      description: "Guia completo para uma alimentação equilibrada na maturidade",
    },
    {
      title: "Saúde Mental na Maturidade",
      image: "/nutri1.jpeg",
      rating: 4.8,
      description: "Estratégias para manter o bem-estar mental após os 50 anos",
    },
    {
      title: "Exercícios para Seniors",
      image: "/nutri2.jpeg",
      rating: 4.7,
      description: "Programa de exercícios adaptados para a terceira idade",
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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossos E-books</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conteúdo especializado desenvolvido por profissionais da saúde para promover seu bem-estar e qualidade de
            vida, baseado em evidências científicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ebooks.map((ebook, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image src={ebook.image || "/placeholder.svg"} alt={ebook.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{ebook.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{ebook.description}</p>
                <div className="flex space-x-2">
                  <Link href={`/ebooks/${ebook.title.toLowerCase().replace(/\s+/g, "-")}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      Ver Detalhes
                    </Button>
                  </Link>
                  <Button
                    className="bg-green-600 hover:bg-green-700 px-6"
                    onClick={() => {
                      // Add to cart logic here
                      alert(`${ebook.title} adicionado ao carrinho!`)
                    }}
                  >
                    R$ 49,90
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/ebooks">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Ver Todos os Ebooks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
