import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Ajustada para ficar totalmente visível */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/dna.jpg"
            alt="DNA Background"
            fill
            className="object-contain hero-image"
            priority
            style={{
              objectPosition: "center center",
            }}
          />
          {/* Overlay sutil para melhor contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>
      </div>

      {/* WhatsApp - Posicionado no canto inferior direito */}
      <div className="absolute right-6 bottom-6 z-20">
        <a
          href="https://wa.me/5583999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-16 h-16 hover:scale-110 transition-transform duration-300 whatsapp-float"
        >
          <Image
            src="/social1.jpg"
            alt="WhatsApp"
            width={64}
            height={64}
            className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
          />
        </a>
      </div>

      {/* Efeitos visuais futuristas */}
      <div className="absolute inset-0 z-5">
        {/* Partículas flutuantes */}
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        {/* Linhas de energia */}
        <div className="energy-lines">
          <div className="energy-line energy-line-1"></div>
          <div className="energy-line energy-line-2"></div>
          <div className="energy-line energy-line-3"></div>
        </div>
      </div>

      {/* Conteúdo mínimo - apenas efeitos visuais */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Elemento decorativo central */}
        <div className="hero-center-element">
          <div className="pulse-ring"></div>
          <div className="pulse-ring pulse-ring-delay-1"></div>
          <div className="pulse-ring pulse-ring-delay-2"></div>
        </div>
      </div>
    </section>
  )
}
