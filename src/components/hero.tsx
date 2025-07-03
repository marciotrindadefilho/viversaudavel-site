import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/dna.jpg" alt="DNA Background" fill className="object-cover hero-image" priority />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* WhatsApp - Right Side (Moved from left) */}
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

      {/* Content - Only Buttons */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
            style={{
              background: "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)",
              boxShadow: "0 4px 15px rgba(5, 150, 105, 0.4)",
            }}
          >
            Explorar E-books
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
              boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)",
            }}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  )
}
