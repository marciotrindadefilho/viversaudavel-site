import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Play, Star, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AudioLibraryPage() { // ✅ NOME ATUALIZADO: Para refletir o novo conteúdo da página

  // --- DADOS DOS PODCASTS ---

  // ✅ CORREÇÃO 1: Variável 'featuredPodcasts' foi criada com dados de exemplo.
  // Estes seriam seus podcasts mais populares ou recentes.
  const featuredPodcasts = [
    { 
      title: "Recuperação Pós-AVC: Exercícios Essenciais", 
      image: "/pod-neuro.png", // Use imagens representativas
      premium: true, 
      category: "Neurologia", 
      narrator: "Dr. Carlos Mendes", 
      duration: "45 min", 
      rating: 4.9, 
      listeners: "3.1k" 
    },
    { 
      title: "Fortalecendo o Core para Evitar Dores Lombares", 
      image: "/pod-ort.png", 
      premium: false, 
      category: "Ortopedia", 
      narrator: "Dra. Ana Costa", 
      duration: "30 min", 
      rating: 4.8, 
      listeners: "5.2k" 
    },
    { 
      title: "Respiração e Bem-Estar na Terceira Idade", 
      image: "/pod-resp.png", 
      premium: false, 
      category: "Respiratória", 
      narrator: "Prof. Eduardo Santos", 
      duration: "25 min", 
      rating: 4.9, 
      listeners: "4.5k" 
    },
  ];

  // ✅ CORREÇÃO 2: Variável 'podcasts' foi criada com dados de exemplo.
  // Esta seria sua lista geral de podcasts ou categorias de podcasts.
  const podcasts = [
    { 
      title: "Saúde Ortopédica", 
      description: "Episódios sobre prevenção e tratamento de lesões articulares e musculares.", 
      image: "/pod-ort.png" 
    },
    { 
      title: "Bem-Estar Respiratório", 
      description: "Dicas práticas para uma respiração mais saudável e alívio de sintomas.", 
      image: "/pod-resp.png" 
    },
    { 
      title: "Qualidade de Vida na Geriatria", 
      description: "Foco na saúde, independência e qualidade de vida na terceira idade.", 
      image: "/pod-ger.png" 
    },
  ];

  // ✅ REMOÇÃO: A lista 'Testimonials' foi removida para limpar o código,
  // já que não estava sendo usada no layout.

  return (
     <div className="min-h-screen bg-white">
       <Header />
 
       {/* ===== 1. HERO SECTION ===== */}
       <section className="relative py-20 md:py-32">
         <div className="absolute inset-0 z-0">
           <Image src="/img-carrinho.png" alt="Background com pessoa em ambiente tranquilo" fill className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
         </div>
         <div className="relative z-10 container mx-auto px-4 text-center text-white">
           <div className="max-w-4xl mx-auto">
             <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                 <Image src="/headphone.png" alt="Ícone de fones de ouvido" width={70} height={70} />
               </div>
             </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa Biblioteca de Áudio</h1>
             <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Artigos, dicas e insights em formato de áudio para uma vida mais ativa, plena e saudável.
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

      {/* ===== 2. FEATURED PODCASTS ===== */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* ✅ CORREÇÃO 3: Corrigido erro de digitação */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Podcasts em Destaque</h2>
            <p className="text-lg text-gray-600">Os mais ouvidos e bem avaliados da nossa biblioteca.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPodcasts.map((podcast) => (
              <Card key={podcast.title} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border">
                <div className="relative h-56">
                  <Image src={podcast.image} alt={podcast.title} fill className="object-cover" />
                  {podcast.premium && <Badge className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold shadow-md">Premium</Badge>}
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <Badge variant="outline" className="mb-2 w-fit">{podcast.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 flex-grow">{podcast.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">Narrado por {podcast.narrator}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
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
        </div>
      </section>
              
      {/* ===== 3. PODCASTS CATEGORIES ===== */}
       <section className="py-20 bg-white" id="podcasts">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Programas</h2>
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
                         <p className="text-gray-600 mb-4 text-sm h-16">{podcast.description}</p>
                         <Button className="w-full bg-green-600 hover:bg-green-700 rounded-lg">Ver Episódios</Button>
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
