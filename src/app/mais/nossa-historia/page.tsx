import Image from "next/image"
import Link from "next/link" // AJUSTE: Importado para usar nos botões
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NossaHistoria() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* AJUSTE: 'items-center' para alinhar verticalmente o conteúdo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            {/* AJUSTE: Adicionado um padding-top para subir o texto e alinhar com o rosto */}
            <div className="lg:pt-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Nossa Expertise</h1>
              {/* AJUSTE: Adicionado 'text-justify' para um texto mais limpo */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 text-justify">
                Com formação em Fisioterapia, especialista Fisioterapia Cardiorrespiratória pelo Instituto do Coração- INCOR/HCFMUSP,
                anos de experiência na área hospitalar, reabilitação motora, neurológica, pós-operatório em geral, cardiopulmonar,
                como também em geriatria, oferecemos conteúdo confiável e prático baseado em ciência para uma vida mais ativa e saudável.
              </p>
              {/* AJUSTE: Adicionado 'text-justify' */}
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                A Viver Saudável tem como principal missão desenvolver conteúdos, baseados em estudos
                e conhecimentos teórico-práticos, sempre fundamentados em evidências científicas.
              </p>
            </div>

            {/* Imagem com fundo transparente */}
            <div className="relative flex justify-center">
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
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AJUSTE: Fundo azul bebê e transição suave */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-blue-100/50 border-blue-200">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cuidado</h3>
                <p className="text-gray-600">Cada conteúdo é desenvolvido pensando no bem-estar dos pacientes</p>
              </CardContent>
            </Card>

            {/* AJUSTE: Fundo azul bebê e ícone dourado */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-blue-100/50 border-blue-200">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precisão</h3>
                <p className="text-gray-600">Informações baseadas em evidências científicas atualizadas</p>
              </CardContent>
            </Card>

            {/* AJUSTE: Fundo azul bebê */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-blue-100/50 border-blue-200">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comunidade</h3>
                <p className="text-gray-600">Construindo uma rede de profissionais comprometidos</p>
              </CardContent>
            </Card>

            {/* AJUSTE: Fundo azul bebê e ícone dourado */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-blue-100/50 border-blue-200">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excelência</h3>
                <p className="text-gray-600">Compromisso com a qualidade em cada material produzido</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossa História</h2>
            {/* AJUSTE: Adicionado 'text-justify' para alinhar o texto */}
            <div className="prose prose-lg mx-auto text-gray-600 text-justify">
              <p className="leading-relaxed mb-6">
                A <strong>Viver Saudável</strong> nasceu da necessidade de tornar o conhecimento especializado em fisioterapia cardiorrespiratória mais acessível.
                Percebemos que muitos profissionais e estudantes enfrentavam dificuldades para encontrar material de qualidade e atualizado na área.
              </p>
              <p className="leading-relaxed mb-6">
                Nossa plataforma foi criada para preencher essa lacuna, oferecendo e-books e audiobooks desenvolvidos por especialistas, com linguagem clara
                e aplicação prática no dia a dia clínico.
              </p>
              <p className="leading-relaxed">
                Acreditamos que o conhecimento deve ser acessível a todos. Por isso, nos dedicamos a oferecer conteúdos de alta qualidade por preços justos,
                contribuindo para a formação de profissionais mais preparados e, assim, promovendo melhores resultados na saúde dos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Faça Parte da Nossa História</h2>
          {/* AJUSTE: Adicionado 'text-justify' e centralizado no mobile */}
          <p className="text-xl mb-8 max-w-2xl mx-auto text-justify sm:text-center">
            Junte-se a centenas de profissionais que já transformaram sua prática com nossos materiais especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* AJUSTE: Botão agora é um link funcional */}
            <Link href="/e-books/biblioteca">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explorar E-books
              </Button>
            </Link>
            {/* AJUSTE: Botão agora é um link funcional */}
            <Link href="/audiobooks/biblioteca">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent w-full sm:w-auto">
                Conhecer Audiobooks
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
