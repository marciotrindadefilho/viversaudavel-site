"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  const categories = [
    { name: "Exercícios", count: 24, color: "bg-green-500" },
    { name: "Nutrição", count: 18, color: "bg-blue-500" },
    { name: "Saúde Mental", count: 15, color: "bg-purple-500" },
    { name: "Prevenção", count: 12, color: "bg-orange-500" },
    { name: "Reabilitação", count: 20, color: "bg-red-500" },
    { name: "Geriatria", count: 16, color: "bg-indigo-500" },
  ]

  const featuredPosts = [
    {
      title: "5 Exercícios Essenciais para Manter a Mobilidade após os 50",
      excerpt:
        "Descubra exercícios simples que podem ser feitos em casa para manter suas articulações saudáveis e flexíveis, promovendo maior independência e qualidade de vida.",
      image: "/nutri2.jpeg",
      rating: 4.7,
      date: "15 Jan 2025",
      category: "Exercícios",
      author: "Dra. Geórgia Espinola Moura",
      readTime: "8 min",
      featured: true,
    },
    {
      title: "Alimentação Anti-inflamatória: O que Incluir no seu Prato",
      excerpt:
        "Conheça os alimentos que ajudam a reduzir a inflamação no corpo e promovem o envelhecimento saudável, com receitas práticas e dicas nutricionais.",
      image: "/nutri.jpeg",
      rating: 4.7,
      date: "12 Jan 2025",
      category: "Nutrição",
      author: "Dra. Giovanna Espinola Moura",
      readTime: "6 min",
      featured: true,
    },
    {
      title: "Técnicas de Respiração para Reduzir o Estresse",
      excerpt:
        "Aprenda técnicas simples de respiração que podem ajudar a controlar a ansiedade e melhorar seu bem-estar mental e físico.",
      image: "/fisio4.png",
      rating: 4.7,
      date: "10 Jan 2025",
      category: "Saúde Mental",
      author: "Dra. Geórgia Espinola Moura",
      readTime: "5 min",
      featured: false,
    },
    {
      title: "Prevenção de Quedas: Estratégias Eficazes para Idosos",
      excerpt:
        "Dicas práticas e exercícios específicos para melhorar o equilíbrio e prevenir quedas, mantendo a segurança e independência.",
      image: "/nutri2.jpeg",
      rating: 4.7,
      date: "08 Jan 2025",
      category: "Prevenção",
      author: "Dra. Geórgia Espinola Moura",
      readTime: "7 min",
      featured: false,
    },
    {
      title: "Fisioterapia Respiratória: Benefícios e Técnicas",
      excerpt:
        "Entenda como a fisioterapia respiratória pode melhorar sua capacidade pulmonar e qualidade de vida, especialmente após os 50 anos.",
      image: "/fisio11.jpg",
      rating: 4.7,
      date: "05 Jan 2025",
      category: "Reabilitação",
      author: "Dra. Geórgia Espinola moura",
      readTime: "9 min",
      featured: false,
    },
    {
      title: "Hidratação na Terceira Idade: Importância e Dicas",
      excerpt:
        "Saiba por que a hidratação adequada é crucial para idosos e como manter níveis ideais de hidratação no dia a dia.",
      image: "/fisio5.png",
      date: "03 Jan 2025",
      category: "Geriatria",
      author: "Dra. Paula Oliveira",
      readTime: "4 min",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/dna4.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-green-600/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog Viver Saudável</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Artigos, dicas e insights para uma vida mais ativa, plena e saudável após os 50 anos
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm opacity-90">Artigos Publicados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-sm opacity-90">Leitores Mensais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm opacity-90">Categorias</div>
              </div>
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
                    <Input placeholder="Pesquisar artigos..." className="pl-10 h-12" />
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
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Mais Recentes</SelectItem>
                    <SelectItem value="popular">Mais Populares</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Categorias</h2>
            <p className="text-lg text-gray-600">Explore nossos artigos por área de interesse</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold">{category.name[0]}</span>
                    </div>
                    <Badge variant="secondary">{category.count} artigos</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mt-4 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Artigos em Destaque</h2>
            <p className="text-lg text-gray-600">Os mais lidos e comentados da nossa comunidade</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500">{post.featured ? "Destaque" : post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-purple-600 group-hover:text-white transition-colors"
                  >
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(2).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Button size="sm" variant="ghost" className="group-hover:text-purple-600">
                      Ler mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Não Perca Nenhum dos Nossos Produtos!</h2>
            <p className="text-xl mb-8 opacity-90">
              Receba nossos E-books e Audiobooks no seu e-mail, e fique por dentro dos melhores conteudos e atualizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Seu melhor e-mail" className="bg-white text-gray-800 border-0 h-12" />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold h-12 px-8">
                Assine Agora!
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
                Seja mais um a receber nossos Produtos semanalmente!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
