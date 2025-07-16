import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PlansPage() {
  const plans = [
    {
      name: "Básico",
      price: 0,
      period: "Grátis",
      description: "Perfeito para começar sua jornada",
      features: [
        "3 e-books gratuitos por mês",
        "1 audiobook gratuito por mês",
        "Acesso ao blog",
        "Newsletter semanal",
        "Suporte por email",
      ],
      color: "border-gray-300",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      icon: <Check className="w-6 h-6" />,
      popular: false,
    },
    {
      name: "Premium",
      price: 30,
      period: "mês",
      description: "Ideal para profissionais da saúde",
      features: [
        "Acesso completo à biblioteca",
        "Todos os e-books e audiobooks",
        "Conteúdo exclusivo premium",
        "Downloads ilimitados",
        "Suporte prioritário",
        "Certificados de conclusão",
        "Acesso antecipado a novos conteúdos",
      ],
      color: "border-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700",
      icon: <Star className="w-6 h-6" />,
      popular: true,
    },
    {
      name: "Premium Anual",
      price: 45,
      period: "mês",
      originalPrice: 360,
      yearlyPrice: 540,
      description: "Melhor custo-benefício",
      features: [
        "Tudo do plano Premium",
        "2 meses grátis (economia de R$ 60)",
        "Acesso vitalício a conteúdos baixados",
        "Consultoria mensal com especialistas",
        "Acesso ao grupo VIP no WhatsApp",
        "Material impresso exclusivo",
        "Desconto em cursos presenciais",
      ],
      color: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      icon: <Crown className="w-6 h-6" />,
      popular: false,
    },
  ]

  const features = [
    {
      title: "Biblioteca Completa",
      description: "Mais de 200 e-books e audiobooks especializados",
      icon: "📚",
    },
    {
      title: "Conteúdo Atualizado",
      description: "Novos materiais adicionados mensalmente",
      icon: "🔄",
    },
    {
      title: "Acesso Mobile",
      description: "Estude em qualquer lugar, a qualquer hora",
      icon: "📱",
    },
    {
      title: "Certificados",
      description: "Comprove seu aprendizado com certificados",
      icon: "🏆",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/dna1.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Uma Biblioteca Digital Para Você</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Planos feitos sob medida para o seu bolso, pensados para transformar seu dia a dia! Acreditamos que cuidar
              de você não precisa custar caro.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm opacity-90">E-books e Audiobooks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm opacity-90">Profissionais Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Escolha Seu Plano</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bem-estar, praticidade e qualidade de vida ao seu alcance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 ${plan.color} ${plan.popular ? "scale-105 shadow-2xl" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && <Badge className="absolute top-4 right-4 bg-green-600">Mais Popular</Badge>}

                <CardHeader className="text-center pb-2">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-green-600" : "bg-gray-600"} text-white`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    {plan.price === 0 ? (
                      <div className="text-4xl font-bold text-gray-800">Grátis</div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-gray-800">
                          R$ {plan.price}
                          <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                        </div>
                        {plan.originalPrice && (
                          <div className="text-sm text-gray-500">
                            <span className="line-through">R$ {plan.originalPrice}/mês</span>
                            <span className="text-green-600 font-medium ml-2">
                              Economize R$ {(plan.originalPrice - plan.price) * 12}/ano
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full h-12 ${plan.buttonColor} text-white font-semibold`}>
                    {plan.price === 0 ? "Começar Grátis" : "Assinar Agora"}
                  </Button>

                  {plan.popular && (
                    <p className="text-xs text-gray-500 mt-3">🔥 Mais de 5.000 profissionais escolheram este plano</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              💳 Aceitamos cartão, PIX e boleto • 🔒 Pagamento 100% seguro • 📱 Acesso imediato
            </p>
            <p className="text-sm text-gray-500">Cancele a qualquer momento. Sem taxas de cancelamento.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Por que escolher a Viver Saudável?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Comece sua transformação hoje mesmo!</h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a milhares de profissionais que já transformaram suas carreiras com nosso conteúdo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Zap className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
