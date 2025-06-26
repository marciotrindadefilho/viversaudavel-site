import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Mission() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Imagem */}
          <div className="flex justify-center">
            <Image
              src="/geo.png" // Garanta que a imagem 'geo.png' está na pasta 'public' do seu projeto
              alt="Georgia Espinola Moura - Fundadora da Viver Saudável"
              width={450}
              height={550}
              className="rounded-lg shadow-2xl object-cover"
              priority // Ajuda a carregar a imagem principal mais rápido
            />
          </div>

          {/* Coluna do Texto */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600">
              Nossa Missão
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Promover a saúde, autonomia e qualidade de vida de pessoas com mais de 50 anos, por meio da produção e divulgação de conteúdos científicos, acessíveis e atualizados em fisioterapia em geral e geriátrica. A Viver Saudável tem como objetivo primário capacitar cuidadores, profissionais da saúde e o próprio idoso com conhecimento prático baseado em evidências.
            </p>
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Georgia Espinola Moura
              </h3>
              <p className="text-md text-green-600">
                Fisioterapeuta • Fundadora
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}