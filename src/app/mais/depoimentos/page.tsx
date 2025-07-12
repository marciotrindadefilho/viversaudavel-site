// src/app/mais/depoimentos/page.tsx

import Image from "next/image"
import Link from "next/link" // ✅ CORREÇÃO: Adicionada a importação do Link que estava faltando.
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Heart, Users, Award, CheckCircle, Search, Headphones, Clock, Play } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input" // ✅ CORREÇÃO 1: Importado do local correto.
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" // ✅ CORREÇÃO 2: Importado do local correto.

export default function TestimonialsLibraryPage() {
  // Dados dos depoimentos (mantidos)
  const testimonials = [
    { name:"Maria Silva", age:"62 anos", Profession:"Aposentada", location:"São Paulo", text:"Os e-books da Viver Saudável mudaram minha perspectiva sobre envelhecimento. Agora me sinto mais confiante para cuidar da minha saúde e tenho muito mais energia no dia a dia. As dicas são práticas e fáceis de seguir!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Mais energia e confiança",},
    { name: "João Santos", age: "58 anos", profession: "Cuidador", location: "Rio de Janeiro, RJ", text: "Como cuidador da minha mãe, encontrei informações valiosas que me ajudaram muito no dia a dia. O conteúdo é de qualidade e a linguagem é clara e acessível. Recomendo para todos os cuidadores!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Cuidador", highlight: "Informações valiosas para cuidadores",},
    { name: "Ana Costa", age: "65 anos", profession: "Professora Aposentada", location: "Belo Horizonte, MG", text: "Excelente material! A linguagem é clara e as dicas são práticas. Consegui melhorar minha postura e reduzir as dores nas costas seguindo os exercícios recomendados. Recomendo para todos que querem envelhecer com saúde e dignidade.", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Melhora na postura e redução das dores",},
    { name: "Dr. Carlos Mendes", age: "45 anos", profession: "Fisioterapeuta", location: "Brasília, DF", text: "Como profissional da área, posso afirmar que o conteúdo da Viver Saudável é baseado em evidências científicas sólidas. Utilizo os materiais como referência em minha prática clínica e recomendo para meus pacientes.", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Conteúdo baseado em evidências científicas",},
    { name: "Lucia Fernandes", age: "59 anos", profession: "Enfermeira", location: "Porto Alegre, RS", text: "A plataforma é fantástica! Os audiobooks me permitem aprender enquanto faço outras atividades. O conhecimento adquirido tem me ajudado tanto na vida pessoal quanto profissional. Parabéns pela iniciativa!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Aprendizado flexível com audiobooks",},
    { name: "Roberto Lima", age: "67 anos", profession: "Engenheiro Aposentado", location: "Salvador, BA", text: "Depois de um AVC, pensei que minha vida ativa havia acabado. Com os conteúdos da Viver Saudável, aprendi exercícios de reabilitação que me devolveram a independência. Hoje me sinto renovado e otimista!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Recuperação pós-AVC e independência",},
    { name: "Dra. Patricia Oliveira", age: "38 anos",profession: "Geriatra", location: "Recife, PE", text: "Recomendo os materiais da Viver Saudável para todos os meus pacientes. A abordagem é humanizada e o conteúdo é atualizado com as melhores práticas da geriatria moderna. Excelente trabalho!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Abordagem humanizada e atualizada",},
    { name: "Carmen Rodriguez", age: "61 anos", profession: "Dona de Casa", location: "Fortaleza, CE", text: "As receitas e dicas de alimentação mudaram minha relação com a comida. Perdi peso de forma saudável e me sinto mais disposta. O melhor é que tudo é explicado de forma simples e prática!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Mudança na alimentação e perda de peso",},
    { name: "Prof. Eduardo Santos", age: "52 anos", profession: "Educador Físico", location: "Curitiba, PR", text: "Como educador físico especializado em terceira idade, encontrei na Viver Saudável uma fonte confiável de informações. Os exercícios são bem fundamentados e seguros para meus alunos mais velhos.", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Exercícios seguros e fundamentados",},
  ]

  // Dados das categorias (mantidos)
  const categories = [
    { name: "Ortopedia", description: "Lesões musculares, articulares, fraturas...", image: "/orto.png", count: 18 },
    { name: "Neurologia", description: "AVC, Parkinson, esclerose múltipla...", image: "/neuro.png", count: 14 },
    { name: "Respiratória", description: "DPOC, asma, fibrose cística...", image: "/fisio6.png", count: 12 },
    { name: "Reabilitação Esportiva", description: "Lesões esportivas, prevenção de lesões...", image: "/reab.png", count: 10 },
    { name: "Cardiovascular", description: "Reabilitação cardíaca, pós-infarto...", image: "/resp.png", count: 13 },
    { name: "Geriatria", description: "Reabilitação em idosos, quedas...", image: "/fisio5.png", count: 16 },
  ]

  // ✅ CORREÇÃO 3: A variável 'featured' foi criada.
  // Usei os 3 primeiros itens da sua lista de depoimentos como exemplo.
  const featured = [
    { title: "Mais energia e confiança aos 62", image: "/placeholder.svg?height=224&width=400", premium: true, category: "Paciente", narrator: "Maria Silva", duration: "1h 30m", rating: 5, listeners: "1.2k" },
    { title: "Informações valiosas para cuidadores", image: "/placeholder.svg?height=224&width=400", premium: false, category: "Cuidador", narrator: "João Santos", duration: "2h 15m", rating: 5, listeners: "980" },
    { title: "Conteúdo baseado em evidências científicas", image: "/placeholder.svg?height=224&width=400", premium: true, category: "Profissional", narrator: "Dr. Carlos Mendes", duration: "3h 45m", rating: 5, listeners: "2.5k" },
  ];

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
       <section className="relative py-20 md:py-32">
         <div className="absolute inset-0 z-0">
           <Image src="/img-carrinho.png" alt="Background" fill className="object-cover" />
           {/* ✅ CORREÇÃO 4: Sintaxe do gradiente corrigida para usar cores válidas. */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
         </div>
         <div className="relative z-10 container mx-auto px-4 text-center text-white">
           <div className="max-w-4xl mx-auto">
             <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                 <Image src="/headphone.png" alt="Ícone de fones de ouvido" width={70} height={70} />
               </div>
             </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Depoimentos e Histórias</h1>
             <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Artigos, dicas e insights para uma vida mais ativa, plena e saudável após os 50 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#podcasts">
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                  <Play className="w-5 h-5 mr-2" />
                  Começar a Ouvir
                </Button>
               </a>
              <Link href="/planos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
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
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input placeholder="Pesquisar por título, narrador..." className="pl-12 h-12 w-full rounded-lg" />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12 w-full rounded-lg"><SelectValue placeholder="Categoria" /></SelectTrigger>
                  <SelectContent>{categories.map(c => <SelectItem key={c.name} value={c.name.toLowerCase()}>{c.name}</SelectItem>)}</SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 w-full rounded-lg"><SelectValue placeholder="Duração" /></SelectTrigger>
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
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-green-500 transition-all duration-300 shadow-lg">
                    <Image src={category.image} alt={category.name} fill className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700 group-hover:text-green-600 transition-colors">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. FEATURED AUDIOBOOKS ===== */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Audiobooks em Destaque</h2>
            <p className="text-lg text-gray-600">Os mais ouvidos e bem avaliados da nossa biblioteca.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((audiobook) => (<Card key={audiobook.title} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border">
                <div className="relative h-56">
                  <Image src={audiobook.image} alt={audiobook.title} fill className="object-cover" />
                  {audiobook.premium && <Badge className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold shadow-md">Premium</Badge>}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{audiobook.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 h-14">{audiobook.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">Narrado por {audiobook.narrator}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /><span>{audiobook.duration}</span></div>
                    <div className="flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-400" /><span>{audiobook.rating}</span></div>
                    <div className="flex items-center space-x-2"><Headphones className="w-4 h-4" /><span>{audiobook.listeners}</span></div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-lg">
                    <Play className="w-4 h-4 mr-2" />
                    {audiobook.premium ? "Ouvir (Premium)" : "Ouvir Grátis"}
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
