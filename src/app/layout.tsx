import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viver Saudável",
  description: "Especialistas em saúde e bem-estar para pessoas com mais de 50 anos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        {/* WhatsApp flutuante fixo */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/5583999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform transition-transform whatsapp-float"
          >
            <img src="/social1.jpg" alt="WhatsApp" className="w-full h-full rounded-full object-cover" />
          </a>
        </div>
      </body>
    </html>
  )
}
