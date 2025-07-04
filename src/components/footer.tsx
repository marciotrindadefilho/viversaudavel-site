import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e WhatsApp */}
          <div className="space-y-4">
            <div className="footer-logo-container">
              <Image src="/img-novo.png" alt="Viver Saudável" width={150} height={50} className="footer-logo" />
            </div>
            <p className="text-sm text-gray-400">E-BOOKS</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Nossos Ebooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Exercícios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Nutrição
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Saúde Mental
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Prevenção
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e Newsletter */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <p>📍 João Pessoa, PB</p>
              <p>📞 (83) 9 9910-5011</p>
              <p>✉️ contato@viversaudavel.com</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-green-400 font-medium">Newsletter</h4>
              <p className="text-xs text-gray-400">Receba dicas de saúde semanalmente</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 text-sm"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">OK</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Viver Saudável. Todos os direitos reservados. Fundada por Georgia Espínola Moura.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <a href="#" className="hover:text-white transition-colors">
              Acessibilidade
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
