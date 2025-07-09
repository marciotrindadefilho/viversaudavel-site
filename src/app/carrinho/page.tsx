"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Gift } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Manual Completo de Ortopedia",
      type: "E-book",
      price: 49.9,
      originalPrice: 79.9,
      quantity: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cor1-OegWOEIsmHdF6dASgvE3gjbYyQNs3D.png",
      category: "Ortopedia",
      author: "Dr. João Silva",
    },
    {
      id: 2,
      title: "Neuroreabilitação Avançada",
      type: "Audiobook",
      price: 39.9,
      originalPrice: 59.9,
      quantity: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nutri3-UH9YKFWIEtaIEWjdi8cBdeLiLKlevw.png",
      category: "Neurologia",
      author: "Dra. Maria Santos",
    },
    {
      id: 3,
      title: "Plano Premium Mensal",
      type: "Assinatura",
      price: 30.0,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      category: "Assinatura",
      description: "Acesso completo à biblioteca",
    },
  ])

  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState(null)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "viver10") {
      setAppliedCoupon({code: "VIVER10", discount: 10 })
    } else if (couponCode.toLowerCase() === "primeira20") {
      setAppliedCoupon({code: "PRIMEIRA20", discount: 20 })
    } else {alert("Cupom inválido")}
    
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce(
    (sum, item) => sum + ((item.originalPrice || item.price) - item.price) * item.quantity,
    0,
  )
  const couponDiscount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0
  const total = subtotal - couponDiscount

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/dna1.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Seu Carrinho</h1>
            <p className="text-lg text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? "item" : "itens"} selecionados para sua jornada de
              aprendizado
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">Seu carrinho está vazio</h2>
              <p className="text-gray-500 mb-8">Explore nossa biblioteca e adicione conteúdos incríveis!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/e-books/biblioteca">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Explorar E-books
                  </Button>
                </Link>
                <Link href="/audiobooks/biblioteca">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Explorar Audiobooks
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <Badge variant="outline" className="mb-2">
                                {item.type}
                              </Badge>
                              <h3 className="font-semibold text-lg">{item.title}</h3>
                              <p className="text-gray-600 text-sm">
                                {item.author && `por ${item.author}`}
                                {item.description && item.description}
                              </p>
                              <Badge variant="secondary" className="mt-1">
                                {item.category}
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.type === "Assinatura"}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={item.type === "Assinatura"}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                {item.originalPrice && item.originalPrice > item.price && (
                                  <span className="text-sm text-gray-500 line-through">
                                    R$ {item.originalPrice.toFixed(2)}
                                  </span>
                                )}
                                <span className="font-semibold text-lg text-green-600">
                                  R$ {(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                {/* Coupon */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gift className="w-5 h-5 mr-2 text-green-600" />
                      Cupom de Desconto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Digite seu cupom"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button onClick={applyCoupon} variant="outline">
                        Aplicar
                      </Button>
                    </div>
                    {appliedCoupon && (
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-green-700 font-medium">
                          Cupom {appliedCoupon.code} aplicado! {appliedCoupon.discount}% de desconto
                        </p>
                      </div>
                    )}
                    <div className="text-sm text-gray-600">
                      <p>Cupons disponíveis:</p>
                      <p>• VIVER10 - 10% de desconto</p>
                      <p>• PRIMEIRA20 - 20% de desconto</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Resumo do Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>

                    {savings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Economia</span>
                        <span>-R$ {savings.toFixed(2)}</span>
                      </div>
                    )}

                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Desconto do cupom</span>
                        <span>-R$ {couponDiscount.toFixed(2)}</span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-green-600">R$ {total.toFixed(2)}</span>
                    </div>

                    <Link href="/checkout">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 h-12">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Finalizar Compra
                      </Button>
                    </Link>

                    <div className="text-center text-sm text-gray-600">
                      <p>🔒 Pagamento 100% seguro</p>
                      <p>📱 Acesso imediato após a compra</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Você também pode gostar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nutri2-hEKXcnlDb0GltMcq8KnJKj8wYtZb9D.png"
                        alt="Nutrição"
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nutrição +50</p>
                        <p className="text-xs text-gray-600">R$ 29,90</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Adicionar
                      </Button>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fisio4-pYlg0M963NhPZs88CgKtOmhSvQbDmy.png"
                        alt="Exercícios"
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Exercícios Terapêuticos</p>
                        <p className="text-xs text-gray-600">R$ 34,90</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Adicionar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
