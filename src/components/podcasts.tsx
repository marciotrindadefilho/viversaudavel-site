"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Headphones, Play, Star, Clock } from "lucide-react"

export default function Podcasts() {
const podcasts = [
    { name: "Ortopedia", image: "/orto.png" },
    { name: "Neurologia", image: "/neuro.png" },
    { name: "Respiratória", image: "/fisio6.png" },
    { name: "Reabilitação Esportiva", image: "/reab.png" },
    { name: "Cardiovascular", image: "/resp.png" },
    { name: "Geriatria", image: "/fisio5.png" },
  ]

  const featuredPodcasts = [
    { title: "Fundamentos da Fisioterapia Ortopédica", narrator: "Dra. Georgia Espinola Moura", category: "Ortopedia", duration: "4h 32min", rating: 4.9, listeners: 850, image: "/fisio3.png", premium: true },
    { title: "Neuroplasticidade e Reabilitação", narrator: "Dra. Georgia Espinola Moura", category: "Neurologia", duration: "3h 45min", rating: 4.8, listeners: 620, image: "/fisio2.png", premium: true },
    { title: "Técnicas de Respiração Terapêutica", narrator: "Dra. Georgia Espinola Moura", category: "Respiratória", duration: "2h 18min", rating: 4.7, listeners: 490, image: "/fisio6.png", premium: false },
  ]

    return (
    <div className="bg-white py-16 md:py-24">
      {/* Container principal para centralizar o conteúdo */}
      <div className="container mx-auto px-4">

        {/* ===== 1. TÍTULO DA SEÇÃO ===== */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Biblioteca de Podcasts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aprenda enquanto se exercita, dirige ou relaxa. Conteúdos em áudio sobre fisioterapia e uma vida mais saudável.
          </p>
        </div>

        {/* ===== 3. FEATURED PODCASTS ===== */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPodcasts.map((podcast) => (
              <Card key={podcast.title} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border flex flex-col">
                <div className="relative h-56 w-full">
                  <Image src={podcast.image} alt={podcast.title} fill className="object-cover" />
                  {podcast.premium && <Badge className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold shadow-md">Premium</Badge>}
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <Badge variant="outline" className="mb-2 w-fit">{podcast.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{podcast.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-grow">Narrado por {podcast.narrator}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 my-4">
                    <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /><span>{podcast.duration}</span></div>
                    <div className="flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-400" /><span>{podcast.rating}</span></div>
                    <div className="flex items-center space-x-2"><Headphones className="w-4 h-4" /><span>{podcast.listeners}</span></div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-lg mt-auto">
                    <Play className="w-4 h-4 mr-2" />
                    {podcast.premium ? "Ouvir (Premium)" : "Ouvir Grátis"}
                  </Button>
                </CardContent>
              </Card>  
            ))}
          </div>
        </section>

       <div className="text-center">
          <Link href="/podcasts/biblioteca">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Ver Todos os Podcasts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
