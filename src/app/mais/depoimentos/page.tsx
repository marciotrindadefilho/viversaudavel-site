"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Heart, Users, Award, CheckCircle, PlayIcon } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    { name: "Maria Silva", age: "62 anos", profession: "Aposentada", location: "São Paulo, SP", text: "Os e-books da Viver Saudável mudaram minha perspectiva sobre envelhecimento. Agora me sinto mais confiante para cuidar da minha saúde e tenho muito mais energia no dia a dia. As dicas são práticas e fáceis de seguir!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Mais energia e confiança",},
    { name: "João Santos", age: "58 anos", profession: "Cuidador", location: "Rio de Janeiro, RJ", text: "Como cuidador da minha mãe, encontrei informações valiosas que me ajudaram muito no dia a dia. O conteúdo é de qualidade e a linguagem é clara e acessível. Recomendo para todos os cuidadores!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Cuidador", highlight: "Informações valiosas para cuidadores",},
    { name: "Ana Costa", age: "65 anos", profession: "Professora Aposentada", location: "Belo Horizonte, MG", text: "Excelente material! A linguagem é clara e as dicas são práticas. Consegui melhorar minha postura e reduzir as dores nas costas seguindo os exercícios recomendados. Recomendo para todos que querem envelhecer com saúde e dignidade.", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Melhora na postura e redução das dores",},
    { name: "Dr. Carlos Mendes", age: "45 anos", profession: "Fisioterapeuta", location: "Brasília, DF", text: "Como profissional da área, posso afirmar que o conteúdo da Viver Saudável é baseado em evidências científicas sólidas. Utilizo os materiais como referência em minha prática clínica e recomendo para meus pacientes.", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Conteúdo baseado em evidências científicas",},
    { name: "Lucia Fernandes", age: "59 anos", profession: "Enfermeira", location: "Porto Alegre, RS", text: "A plataforma é fantástica! Os audiobooks me permitem aprender enquanto faço outras atividades. O conhecimento adquirido tem me ajudado tanto na vida pessoal quanto profissional. Parabéns pela iniciativa!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Aprendizado flexível com audiobooks",},
    { name: "Roberto Lima", age: "67 anos", profession: "Engenheiro Aposentado", location: "Salvador, BA", text: "Depois de um AVC, pensei que minha vida ativa havia acabado. Com os conteúdos da Viver Saudável, aprendi exercícios de reabilitação que me devolveram a independência. Hoje me sinto renovado e otimista!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Recuperação pós-AVC e independência",},
    { name: "Dra. Patricia Oliveira", age: "38 anos", profession: "Geriatra", location: "Recife, PE", text: "Recomendo os materiais da Viver Saudável para todos os meus pacientes. A abordagem é humanizada e o conteúdo é atualizado com as melhores práticas da geriatria moderna. Excelente trabalho!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Abordagem humanizada e atualizada",},
    { name: "Carmen Rodriguez", age: "61 anos", profession: "Dona de Casa", location: "Fortaleza, CE", text: "As receitas e dicas de alimentação mudaram minha relação com a comida. Perdi peso de forma saudável e me sinto mais disposta. O melhor é que tudo é explicado de forma simples e prática!", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Paciente", highlight: "Mudança na alimentação e perda de peso",},
    { name: "Prof. Eduardo Santos", age: "52 anos", profession: "Educador Físico", location: "Curitiba, PR", text: "Como educador físico especializado em terceira idade, encontrei na Viver Saudável uma fonte confiável de informações. Os exercícios são bem fundamentados e seguros para meus alunos mais velhos.", image: "/placeholder.svg?height=80&width=80", rating: 5, category: "Profissional", highlight: "Exercícios seguros e fundamentados",},
  ]

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, number: "10.000+", label: "Pessoas Atendidas",},
    { icon: <Star className="w-8 h-8 text-yellow-500" />, number: "4.9/5", label: "Avaliação Média",},
    { icon: <Heart className="w-8 h-8 text-red-500" />, number: "98%", label: "Satisfação",},
    { icon: <Award className="w-8 h-8 text-green-600" />, number: "500+", label: "Depoimentos",},
  ]

  const categories = [
    { name: "Pacientes", count: 65, color: "bg-blue-500" },
    { name: "Profissionais", count: 25, color: "bg-green-500" },
    { name: "Cuidadores", count: 10, color: "bg-purple-500" },
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
                       <Image src="/blog.png" alt="Ícone de fones de ouvido" width={90} height={90} />
                     </div>
                   </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-32">Depoimentos</h1>
                   <p className="text-base md:text-xl leading-relaxed mb-12">
                    Artigos, dicas e insights para uma vida mais ativa, plena e saudável após os 50 anos
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#audiobooks">
                    <Button size="lg" className="border-green-600 text-white-600 hover:bg-green-600 hover:text-white">
                      <PlayIcon className="w-5 h-5 mr-2" />
                        Depoimentos Aqui!
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

       {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quem Nos Recomenda</h2>
            <p className="text-lg text-gray-600">Depoimentos de diferentes perfis de usuários</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold text-xl">{category.count}%</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O que Nossos Usuários Dizem</h2>
            <p className="text-lg text-gray-600">Transformações reais, histórias inspiradoras</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-gray-200" />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.age} • {testimonial.profession}
                      </p>
                      <p className="text-xs text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 leading-relaxed italic mb-4">"{testimonial.text}"</p>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <p className="text-sm font-medium text-green-800">{testimonial.highlight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Depoimentos em Vídeo</h2>
            <p className="text-lg text-gray-600">Histórias contadas pelos próprios protagonistas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {index === 0 && "Maria conta sua transformação"}
                    {index === 1 && "João fala sobre cuidar da mãe"}
                    {index === 2 && "Ana compartilha sua experiência"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 && "Como os exercícios mudaram minha vida após os 60 anos"}
                    {index === 1 && "Dicas valiosas para cuidadores de idosos"}
                    {index === 2 && "Envelhecimento ativo e saudável é possível"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Sua História Pode Ser a Próxima!</h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a milhares de pessoas que já transformaram suas vidas com nossos conteúdos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#audiobooks">
                <Button size="lg" className="border-green-600 text-white-600 hover:bg-green-600 hover:text-white">
                  <PlayIcon className="w-5 h-5 mr-2" />
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
      <Footer />
    </div>
  )}