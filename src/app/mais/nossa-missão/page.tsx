import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Target, Users, Award } from "lucide-react"
import Image from "next/image"

export default function NossaMissao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Nossa Missão</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Promover a saúde, autonomia e qualidade de vida de pessoas com mais de 50 anos, por meio da produção e
                divulgação de conteúdos científicos, acessíveis e atualizados em fisioterapia em geral e geriátrica.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Viver Saudável tem como objetivo primário capacitar cuidadores, profissionais da saúde e o próprio
                idoso com conhecimento prático baseado em evidências.
              </p>
            </div>

            {/* Imagem com fundo transparente */}
            <div className="relative">
              <div className="geo-image-container">
                <Image
                  src="/geo.png"
                  alt="Especialista em Saúde"
                  width={500}
                  height={600}
                  className="geo-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cuidado</h3>
                <p className="text-gray-600">Cada conteúdo é desenvolvido pensando no bem-estar dos pacientes</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precisão</h3>
                <p className="text-gray-600">Informações baseadas em evidências científicas atualizadas</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comunidade</h3>
                <p className="text-gray-600">Construindo uma rede de profissionais comprometidos</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excelência</h3>
                <p className="text-gray-600">Compromisso com a qualidade em cada material produzido</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossa História</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                O <strong>Viver Saudável</strong> nasceu da necessidade de tornar o conhecimento especializado em
                fisioterapia cardiorrespiratória mais acessível. Percebemos que muitos profissionais e estudantes
                enfrentavam dificuldades para encontrar material de qualidade e atualizado na área.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Nossa plataforma foi criada para preencher essa lacuna, oferecendo e-books e audiobooks desenvolvidos
                por especialistas, com linguagem clara e aplicação prática no dia a dia clínico.
              </p>
              <p className="text-lg leading-relaxed">
                Acreditamos que o conhecimento deve ser acessível a todos, por isso trabalhamos para oferecer conteúdo
                de alta qualidade a preços justos, contribuindo para a formação de profissionais mais capacitados e,
                consequentemente, para melhores resultados na saúde dos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Faça Parte da Nossa Missão</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já transformaram sua prática com nossos materiais especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Explorar E-books
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Conhecer Audiobooks
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
