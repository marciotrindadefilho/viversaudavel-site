"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

 export default function AudiobooksPage() {
  const audiobooks = [
    {
      name: "Ortopedia",
      description: "Lesões musculares, ligamentares, articulares, fraturas, pós-operatório",
      image: "/audiobook.png",
      color: "bg-red-500",
      count: 18,
    },
    {
      name: "Neurologia",
      description: "AVC, Parkinson, esclerose múltipla, lesões medulares, paralisia cerebral",
      image: "/audiobook.png",
      color: "bg-blue-500",
      count: 14,
    },
    {
      name: "Respiratória",
      description: "DPOC, asma, fibrose cística, pós-operatório de cirurgias torácicas",
      image: "/audiobook.png",
      color: "bg-green-500",
      count: 12,
    },
    {
      name: "Reabilitação Esportiva",
      description: "Lesões esportivas, prevenção de lesões, retorno ao esporte",
      image: "/audiobook.png",
      color: "bg-orange-500",
      count: 10,
    },
    {
      name: "Cardiovascular",
      description: "Reabilitação cardíaca, pós-infarto, insuficiência cardíaca",
      image: "/audiobook.png",
      color: "bg-purple-500",
      count: 13,
    },
    {
      name: "Geriatria",
      description: "Reabilitação em idosos, sarcopenia, equilíbrio, quedas",
      image: "/audiobook.png",
      color: "bg-indigo-500",
      count: 16,
    },
  ]

  const featuredAudiobooks = [
    {
      title: "Fundamentos da Fisioterapia Ortopédica",
      narrator: "Dra. Georgia Espinola Moura",
      category: "Ortopedia",
      duration: "4h 32min",
      rating: 4.9,
      listeners: 850,
      image: "/fisio3.png",
      premium: true,
    },
    {
      title: "Neuroplasticidade e Reabilitação",
      narrator: "Dra. Georgia Espinola Moura",
      category: "Neurologia",
      duration: "3h 45min",
      rating: 4.8,
      listeners: 620,
      image: "/fisio2.png",
      premium: true,
    },
    {
      title: "Técnicas de Respiração Terapêutica",
      narrator: "Dra. Georgia Espinola Moura",
      category: "Respiratória",
      duration: "2h 18min",
      rating: 4.7,
      listeners: 490,
      image: "/fisio6.png",
      premium: false,
    },
  ]

  return (
    <section className="relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/dna.jpg" alt="DNA Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/90" />
        </div>

      <div className="relative z-10 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossos Audiobooks</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
           Aprenda enquanto se exercita, dirige ou relaxa. Conteúdo profissional narrado por especialistas em
           fisioterapia e reabilitação.
          </p>
        </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {audiobooks.map((audiobooks, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image src={audiobooks.image || "/placeholder.svg"} alt={audiobooks.image} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{audiobooks.image}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{audiobooks.description}</p>
                <div className="flex space-x-2">
                  <Link href={`/audiobooks/${audiobooks.image.toLowerCase().replace(/\s+/g, "-")}`} className="flex-1">
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
                      alert(`${audiobooks.image} adicionado ao carrinho!`)
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
                         Ver Todos os Audiobooks
                       </Button>
                     </Link>
                   </div>
                 </div>
               </section>
             )
           }