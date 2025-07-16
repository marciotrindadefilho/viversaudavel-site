"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Lock, User, MapPin, Phone, Mail, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [step, setStep] = useState(1) // 1: Info, 2: Payment, 3: Confirmation

  const orderItems = [
    {
      title: "Manual Completo de Ortopedia",
      type: "E-book",
      price: 49.9,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cor1-OegWOEIsmHdF6dASgvE3gjbYyQNs3D.png",
    },
    {
      title: "Neuroreabilitação Avançada",
      type: "Audiobook",
      price: 39.9,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nutri3-UH9YKFWIEtaIEWjdi8cBdeLiLKlevw.png",
    },
  ]

  const total = orderItems.reduce((sum, item) => sum + item.price, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

  if (step === 3) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <Image src="/dna4.jpg" alt="Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="backdrop-blur-sm bg-white/95 shadow-2xl">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Compra Realizada com Sucesso!</h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Parabéns! Seus conteúdos já estão disponíveis na sua biblioteca pessoal.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h3 className="font-semibold text-green-800 mb-2">Próximos Passos:</h3>
                    <ul className="text-left text-green-700 space-y-2">
                      <li>✅ Confirmação enviada para seu e-mail</li>
                      <li>✅ Conteúdos liberados na sua conta</li>
                      <li>✅ Acesso vitalício garantido</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Acessar Minha Biblioteca
                    </Button>
                    <Button size="lg" variant="outline">
                      Continuar Comprando
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/dna.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white-200 mb-4">Finalizar Compra</h1>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-green-600 text-white" : "bg-gray-300"}`}
              >
                1
              </div>
              <div className={`w-16 h-1 ${step >= 2 ? "bg-green-600" : "bg-gray-300"}`} />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-green-600 text-white" : "bg-gray-300"}`}
              >
                2
              </div>
              <div className={`w-16 h-1 ${step >= 3 ? "bg-green-600" : "bg-gray-300"}`} />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-green-600 text-white" : "bg-gray-300"}`}
              >
                3
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-sm bg-white/95 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {step === 1 ? (
                      <>
                        <User className="w-5 h-5 mr-2 text-blue-600" />
                        Informações Pessoais
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                        Pagamento
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Nome *</Label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Sobrenome *</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input id="email" type="email" className="pl-10" required />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Telefone</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                              <Input id="phone" type="tel" className="pl-10" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cpf">CPF *</Label>
                            <Input id="cpf" placeholder="000.000.000-00" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Endereço</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input id="address" className="pl-10" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">Cidade</Label>
                            <Input id="city" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">Estado</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pb">Paraíba</SelectItem>
                                <SelectItem value="sp">São Paulo</SelectItem>
                                <SelectItem value="rj">Rio de Janeiro</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cep">CEP</Label>
                            <Input id="cep" placeholder="00000-000" />
                          </div>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div className="space-y-4">
                          <Label>Método de Pagamento</Label>
                          <div className="grid md:grid-cols-3 gap-4">
                            <Card
                              className={`cursor-pointer border-2 ${paymentMethod === "credit" ? "border-blue-600" : "border-gray-200"}`}
                              onClick={() => setPaymentMethod("credit")}
                            >
                              <CardContent className="p-4 text-center">
                                <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                <p className="font-medium">Cartão de Crédito</p>
                              </CardContent>
                            </Card>

                            <Card
                              className={`cursor-pointer border-2 ${paymentMethod === "pix" ? "border-blue-600" : "border-gray-200"}`}
                              onClick={() => setPaymentMethod("pix")}
                            >
                              <CardContent className="p-4 text-center">
                                <div className="w-8 h-8 mx-auto mb-2 bg-green-600 rounded flex items-center justify-center">
                                  <span className="text-white font-bold text-xs">PIX</span>
                                </div>
                                <p className="font-medium">PIX</p>
                              </CardContent>
                            </Card>

                            <Card
                              className={`cursor-pointer border-2 ${paymentMethod === "boleto" ? "border-blue-600" : "border-gray-200"}`}
                              onClick={() => setPaymentMethod("boleto")}
                            >
                              <CardContent className="p-4 text-center">
                                <div className="w-8 h-8 mx-auto mb-2 bg-orange-600 rounded flex items-center justify-center">
                                  <span className="text-white font-bold text-xs">BOL</span>
                                </div>
                                <p className="font-medium">Boleto</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        {paymentMethod === "credit" && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Número do Cartão *</Label>
                              <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="cardName">Nome no Cartão *</Label>
                              <Input id="cardName" required />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">Validade *</Label>
                                <Input id="expiry" placeholder="MM/AA" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV *</Label>
                                <Input id="cvv" placeholder="000" required />
                              </div>
                            </div>
                          </div>
                        )}

                        {paymentMethod === "pix" && (
                          <div className="bg-green-50 p-6 rounded-lg text-center">
                            <h3 className="font-semibold text-green-800 mb-2">Pagamento via PIX</h3>
                            <p className="text-green-700">
                              Após confirmar, você receberá o código PIX para pagamento instantâneo.
                            </p>
                          </div>
                        )}

                        {paymentMethod === "boleto" && (
                          <div className="bg-orange-50 p-6 rounded-lg text-center">
                            <h3 className="font-semibold text-orange-800 mb-2">Pagamento via Boleto</h3>
                            <p className="text-orange-700">
                              O boleto será gerado após a confirmação. Prazo de vencimento: 3 dias úteis.
                            </p>
                          </div>
                        )}
                      </>
                    )}

                    <div className="flex justify-between pt-6">
                      {step > 1 && (
                        <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                          Voltar
                        </Button>
                      )}
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 ml-auto">
                        <Lock className="w-4 h-4 mr-2" />
                        {step === 1 ? "Continuar" : "Finalizar Compra"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="backdrop-blur-sm bg-white/95 shadow-xl sticky top-4">
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <span className="font-semibold">R$ {item.price.toFixed(2)}</span>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-green-600">R$ {total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-blue-700">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm font-medium">Pagamento Seguro</span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">Seus dados estão protegidos com criptografia SSL</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
