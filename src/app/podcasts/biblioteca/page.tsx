import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Headphones, Play, Star, Clock, Volume2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PodcastsLibraryPage() {
  const categories = [
    { name: "Ortopedia", description: "Lesões musculares, articulares, fraturas...", image: "/orto.png", count: 18 },
    { name: "Neurologia", description: "AVC, Parkinson, esclerose múltipla...", image: "/neuro.png", count: 14 },
    { name: "Respiratória", description: "DPOC, asma, fibrose cística...", image: "/fisio6.png", count: 12 },
    { name: "Reabilitação Esportiva", description: "Lesões esportivas, prevenção de lesões...", image: "/reab.png", count: 10 },
    { name: "Cardiovascular", description: "Reabilitação cardíaca, pós-infarto...", image: "/resp.png", count: 13 },
    { name: "Geriatria", description: "Reabilitação em idosos, quedas...", image: "/fisio5.png", count: 16 },
  ]

  const featuredPodcasts = [
    { title: "Fundamentos da Fisioterapia Ortopédica", narrator: "Dra. Georgia Espinola Moura", category: "Ortopedia", duration: "4h 32min", rating: 4.9, listeners: 850, image: "/fisio3.png", premium: true },
    { title: "Neuroplasticidade e Reabilitação", narrator: "Dra. Georgia Espinola Moura", category: "Neurologia", duration: "3h 45min", rating: 4.8, listeners: 620, image: "/fisio2.png", premium: true },
    { title: "Técnicas de Respiração Terapêutica", narrator: "Dra. Georgia Espinola Moura", category: "Respiratória", duration: "2h 18min", rating: 4.7, listeners: 490, image: "/fisio6.png", premium: false },
  ]

  // Array de podcasts para a nova seção
  const podcasts = [
      { title: "Podcast Ortopedia", description: "Episódios sobre prevenção e tratamento de lesões.", image: "/pod-ort.png", color: "bg-blue-500 hover:bg-blue-600" },
      { title: "Podcast Respiratória", description: "Dicas para uma respiração mais saudável e bem-estar.", image: "/pod-resp.png", color: "bg-green-500 hover:bg-green-600" },
      { title: "Podcast Geriatria", description: "Foco na saúde e qualidade de vida na terceira idade.", image: "/pod-ger.png", color: "bg-purple-500 hover:bg-purple-600" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/img-carrinho.png" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent-600/80 to-transparent-600/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
               <div className="w-20 h-20 bg-yellow/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Image src="/podcast.png" alt="Ícone de fones de ouvido" width={90} height={90} />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-32">
              Biblioteca de Podcasts
            </h1>
            <p className="text-base md:text-xl leading-relaxed mb-12">
              Aprenda enquanto se exercita, dirige ou relaxa. Ciência que respira com você: conteúdos em áudio sobre fisioterapia cardiorrespiratória e uma vida mais saudável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#podcasts">
                <Button size="lg" className="border-green-600 text-white-600 hover:bg-green-600 hover:text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Começar a Ouvir
                </Button>
              </a>
              <Link href="/planos">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Ver Planos Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. SEARCH AND FILTERS ===== */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input placeholder="Pesquisar por título, narrador..." className="pl-12 h-12 rounded-lg" />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg"><SelectValue placeholder="Categoria" /></SelectTrigger>
                  <SelectContent>{categories.map(c => <SelectItem key={c.name} value={c.name.toLowerCase()}>{c.name}</SelectItem>)}</SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg"><SelectValue placeholder="Duração" /></SelectTrigger>
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

      {/* ===== 3. CATEGORIES GRID ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Nossas Categorias</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Conteúdo narrado por profissionais especializados em cada área.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-golden-400 transition-all duration-300 shadow-lg">
                    <Image src={category.image} alt={category.name} fill className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700 group-hover:text-golden-500 transition-colors">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. FEATURED PODCASTS ===== */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Podcasts em Destaque</h2>
            <p className="text-lg text-gray-600">Os mais ouvidos e bem avaliados da nossa biblioteca.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPodcasts.map((podcast) => (
              <Card key={podcast.title} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border">
                <div className="relative h-56">
                  <Image src={podcast.image} alt={podcast.title} fill className="object-cover" />
                  {podcast.premium && <Badge className="absolute top-4 right-4 bg-golden-500 text-black shadow-md">Premium</Badge>}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{podcast.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 h-14">{podcast.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">Narrado por {podcast.narrator}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /><span>{podcast.duration}</span></div>
                    <div className="flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-400" /><span>{podcast.rating}</span></div>
                    <div className="flex items-center space-x-2"><Headphones className="w-4 h-4" /><span>{podcast.listeners}</span></div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-lg">
                    <Play className="w-4 h-4 mr-2" />
                    {podcast.premium ? "Ouvir (Premium)" : "Ouvir Grátis"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. PODCASTS VIDA SAUDÁVEL ===== */}
      <section className="py-20 bg-white" id="podcasts">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Podcasts Vida Saudável</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Conteúdos em áudio sobre bem-estar e saúde para o seu dia a dia.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {podcasts.map((podcast) => (
                <Card key={podcast.title} className="text-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border overflow-hidden group">
                    <div className="relative h-48">
                        <Image src={podcast.image} alt={podcast.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                        <CardTitle className="text-xl font-semibold mb-2">{podcast.title}</CardTitle>
                        <p className="text-gray-600 mb-4 text-sm h-12">{podcast.description}</p>
                        <Button className="w-full bg-green-600 hover:bg-green-700 rounded-lg">Ouvir Agora</Button>
                    </div>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}