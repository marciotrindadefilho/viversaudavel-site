"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

 export default function Audiobooks() {
  const audiobooks = [
    {
      name: "Ortopedia",
      description: "Lesões musculares, ligamentares, articulares, fraturas, pós-operatório",
      image: "/orto.png",
      color: "bg-red-500",
      count: 18,
    },
    {
      name: "Neurologia",
      description: "AVC, Parkinson, esclerose múltipla, lesões medulares, paralisia cerebral",
      image: "/neuro.png",
      color: "bg-blue-500",
      count: 14,
    },
    {
      name: "Respiratória",
      description: "DPOC, asma, fibrose cística, pós-operatório de cirurgias torácicas",
      image: "/resp.png",
      color: "bg-green-500",
      count: 12,
    },
  
  ]

   function alert(arg0: string) {
     throw new Error("Function not implemented.")
   }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo gradiente que combina com a imagem DNA */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/50 via-transparent to-slate-900/50"></div>
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
                     <Link href="/audiobooks">
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