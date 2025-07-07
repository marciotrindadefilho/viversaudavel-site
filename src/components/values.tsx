export default function Values() {
  const values = [
    {
      number: "1",
      title: "Educação Acessível",
      description: "Linguagem simples, prática e objetiva, que alcança profissionais e leigos.",
    },
    {
      number: "2",
      title: "Ética e Responsabilidade",
      description: "Atuação transparente, com respeito às individualidades e à diversidade de contextos.",
    },
    {
      number: "3",
      title: "Cuidado Humanizado",
      description: "Foco no ser humano, em todas as fases da vida.",
    },
    {
      number: "4",
      title: "Inovação Digital",
      description: "Uso da tecnologia como ferramenta para democratizar o acesso ao conhecimento em saúde.",
    },
  ]

  return (
    <section className="relative py-20 bg-white"> {/* Fundo branco */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossos Valores</h2>
          <h3 className="text-2xl font-semibold text-[#d4af37] mb-8">Nossa Expertise</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Com formação em Fisioterapia, especialista Fisioterapia Cardiorrespiratória pelo Instituto do Coração-
            INCOR/HCFMUSP, anos de experiência na área hospitalar, reabilitação motora, neurológica, pós-operatório em
            geral, cardiopulmonar, como também em geriatria, oferecemos conteúdo confiável e prático baseado em ciência
            para uma vida mais saudável e ativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#d4af37] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {value.number}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
