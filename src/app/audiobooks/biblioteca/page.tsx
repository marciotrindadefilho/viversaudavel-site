import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Headphones, Play, Star, Clock, Volume2, Link } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AudiobooksLibraryPage() {
  const categories = [
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
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
            <section className="relative py-20">
              <div className="absolute inset-0 z-0">
                <Image src="/img-carrinho.png" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent-600/80 to-transparent-600/80" />
              </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-golden">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-yellow/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Headphones className="w-10 h-10 text-golden" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Biblioteca de Audiobooks</h1>




            <p className="text-base md:text-xl mb-8 leading-relaxed">
            Aprenda enquanto se exercita, dirige ou relaxa. Ciência que respira com você: conteúdos em áudio
            sobre fisioterapia cardiorrespiratória e uma vida mais saudável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="border-green-600 text-white-600 hover:bg-green-600 hover:text-white">
                <Play className="w-5 h-5 mr-2" />
                Começar a Ouvir
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Ver Planos Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input placeholder="Pesquisar audiobooks por título, narrador..." className="pl-10 h-12" />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name.toLowerCase()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Duração" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Até 2h</SelectItem>
                    <SelectItem value="medium">2h - 5h</SelectItem>
                    <SelectItem value="long">Mais de 5h</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Categorias de Audiobooks</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conteúdo narrado por profissionais especializados em cada área
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Volume2 className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{category.count} audiobooks</Badge>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Audiobooks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Audiobooks em Destaque</h2>
            <p className="text-lg text-gray-600">Os mais ouvidos e bem avaliados da nossa biblioteca</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAudiobooks.map((audiobook, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={audiobook.image || "/placeholder.svg"}
                    alt={audiobook.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                      <Play className="w-5 h-5 mr-2" />
                      Reproduzir
                    </Button>
                  </div>
                  {audiobook.premium && <Badge className="absolute top-4 right-4 bg-yellow-500">Premium</Badge>}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {audiobook.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{audiobook.title}</h3>
                  <p className="text-gray-600 mb-2">Narrado por {audiobook.narrator}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{audiobook.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{audiobook.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-white-500">
                      <Headphones className="w-4 h-4" />
                      <span className="text-sm">{audiobook.listeners} ouvintes</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Play className="w-4 h-4 mr-2" />
                    {audiobook.premium ? "Ouvir (Premium)" : "Ouvir Grátis"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white-800 mb-4">Planos de Assinatura</h2>
            <p className="text-lg text-white-600">Escolha o plano ideal para suas necessidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-2 hover:border-green-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Mensal</CardTitle>
                <div className="text-3xl font-bold text-white-600">R$ 30,00</div>
                <p className="text-white-600">por mês</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">Assinar</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-green-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">Mais Popular</Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Trimestral</CardTitle>
                <div className="text-3xl font-bold text-white-600">R$ 60,00</div>
                <p className="text-white-600">3 meses</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">Assinar</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-green-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Anual</CardTitle>
                <div className="border-green-600 text-white-600 hover:bg-green-600 hover:text-white">R$ 45,00</div>
                <p className="text-white-600">por mês</p>
              </CardHeader>
              <CardContent>
                <Button className="border-green-600 text-white-600 hover:bg-green-600 hover:text-white">Assinar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
