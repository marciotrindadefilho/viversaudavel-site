import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Star } from "lucide-react"
import Image from "next/image"

export default function EbooksSection() {
  const ebooks = [
    {
      id: 1,
      title: "Alimentação Saudável +50",
      description: "Guia completo de nutrição para pessoas maduras",
      image: "/nutri.jpeg",
      rating: 4.9,
      category: "Nutrição",
    },
    {
      id: 2,
      title: "Saúde Mental na Maturidade",
      description: "Bem-estar emocional e mental na terceira idade",
      image: "/nutri1.jpeg",
      rating: 4.8,
      category: "Saúde Mental",
    },
    {
      id: 3,
      title: "Exercícios para Seniors",
      description: "Programa de atividades físicas adaptadas",
      image: "/nutri2.jpeg",
      rating: 4.7,
      category: "Exercícios",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos E-books</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo especializado para uma vida mais saudável e ativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook) => (
            <Card key={ebook.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ebook.image || "/placeholder.svg"}
                  alt={ebook.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {ebook.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">E-BOOK</span>
                </div>
                <CardTitle className="text-lg">{ebook.title}</CardTitle>
                <CardDescription>{ebook.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(ebook.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({ebook.rating})</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Ler Agora
                  </Button>
                  <Button variant="outline" className="px-3 bg-transparent">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Ver Todos os E-books
          </Button>
        </div>
      </div>
    </section>
  )
}
