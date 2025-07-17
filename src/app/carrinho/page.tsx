"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Gift, ArrowLeft, X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Interfaces
interface CartItem {
  id: number;
  title: string;
  type: "E-book" | "Audiobook" | "Podcast" | "Assinatura";
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  category: string;
  author?: string;
  description?: string;
}

interface NotificationState {
  message: string;
  type: 'success' | 'error';
}

export default function CartPage() {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(items => items.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const removeItem = (id: number) => {
    setCartItems(items => {
      const updatedItems = items.filter(item => item.id !== id);
      showNotification("Item removido do carrinho.", "success");
      return updatedItems;
    });
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "viver10") {
      setAppliedCoupon({ code: "VIVER10", discount: 10 });
      showNotification("Cupom VIVER10 aplicado!", "success");
    } else if (couponCode.toLowerCase() === "primeira20") {
      setAppliedCoupon({ code: "PRIMEIRA20", discount: 20 });
      showNotification("Cupom PRIMEIRA20 aplicado!", "success");
    } else {
      showNotification("Cupom inválido.", "error");
    }
  };
  
  const handleCheckout = () => {
    if (isCheckingOut) return;

    setIsCheckingOut(true);
    showNotification("Redirecionando para o pagamento...", "success");

    
    setTimeout(() => {
      console.log("Iniciando processo de checkout...");
      console.log("Itens no carrinho:", cartItems);
      console.log("Total a ser cobrado:", total.toFixed(2));
      // Lógica de redirecionamento real iria aqui. Ex: window.location.href = '/checkout';
      setIsCheckingOut(false);
    }, 2000);
  };

  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0);
  const couponDiscount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
  const total = subtotal - couponDiscount;

  const hasItems = cartItems.length > 0;
  const mainBgClass = hasItems ? 'bg-gray-50' : 'bg-black'; 

  return (
    <div className={`flex flex-col min-h-screen ${mainBgClass}`}>
      <Header />
      
      <main className="flex-grow relative">
        {/* EFEITOS VISUAIS PARA CARRINHO VAZIO */}
        {!hasItems && (
          <>
            {/* Camada 1: Imagem de Fundo */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/img-carrinho.png" 
                alt="Viver Saudável"
                fill 
                className="object-cover"
                quality={80}
              />
            </div>
            {/* Camada 2: Overlay de Gradiente para Harmonização e Legibilidade */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-transparent/80 via-transparent/60 to-transparent"></div>
          </>
        )}
        
        {/* COMPONENTE DE NOTIFICAÇÃO */}
        {notification && (
          <div 
            className={`fixed top-24 right-5 z-50 p-4 rounded-lg shadow-lg text-white flex items-center gap-4 transition-transform duration-500 ${notification ? 'translate-x-0' : 'translate-x-[120%]'} ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
          >
            <span>{notification.message}</span>
            <button onClick={() => setNotification(null)} className="p-1 rounded-full hover:bg-white/20">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* CONTAINER PRINCIPAL DO CONTEÚDO */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          
          {/* RENDERIZAÇÃO CONDICIONAL: CARRINHO VAZIO OU COM ITENS */}
          {!hasItems ? (
            // --- SEÇÃO DE CARRINHO VAZIO ---
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
              <ShoppingBag className="w-20 h-20 md:w-24 md:h-24 text-gray-400/80 mb-2" strokeWidth={1.5} />
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-12">
                Seu carrinho está vazio
              </h1>
              <p className="max-w-md text-base md:text-lg text-gray-300 mb-8">
                Parece que você ainda não adicionou nenhum produto. Que tal explorar nosso catálogo e começar agora?
              </p>
              <Link href="/">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-base h-12 px-8">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Continuar a Comprar
                </Button>
              </Link>
            </div>
          ) : (
            // --- SEÇÃO DE CARRINHO COM ITENS ---
            <>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Seu Carrinho</h1>
                  <p className="text-base text-gray-600 mt-1">Revise os seus itens antes de finalizar a compra.</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 lg:gap-12">
                {/* Coluna da Esquerda: Itens */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4 flex gap-4">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                          <Image src={item.image} alt={item.title} fill className="object-cover rounded-lg" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg text-gray-800 flex-1 pr-2">{item.title}</h3>
                            <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 hover:bg-red-50 h-8 w-8 flex-shrink-0">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <Badge variant="secondary" className="w-fit mt-1">{item.type}</Badge>
                          <div className="flex-grow" /> {/* Empurra o conteúdo abaixo para o final */}
                          <div className="flex justify-between items-end mt-2">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.type === "Assinatura"} className="h-8 w-8">
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.type === "Assinatura"} className="h-8 w-8">
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              {item.originalPrice && (
                                <p className="text-sm text-gray-500 line-through">R$ {item.originalPrice.toFixed(2)}</p>
                              )}
                              <p className="font-bold text-lg text-green-600">R$ {(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Coluna da Direita: Resumo e Cupom */}
                <div className="lg:sticky lg:top-24 space-y-6 mt-8 lg:mt-0 h-fit">
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">Resumo do Pedido</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
                      {savings > 0 && <div className="flex justify-between text-green-600"><span>Economia</span><span>-R$ {savings.toFixed(2)}</span></div>}
                      {couponDiscount > 0 && <div className="flex justify-between text-green-600"><span>Desconto do Cupom</span><span>-R$ {couponDiscount.toFixed(2)}</span></div>}
                      <Separator />
                      <div className="flex justify-between text-xl font-bold"><span>Total</span><span className="text-green-600">R$ {total.toFixed(2)}</span></div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={handleCheckout} disabled={isCheckingOut} className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg disabled:opacity-60 disabled:cursor-not-allowed">
                        {isCheckingOut ? (
                          <span className="animate-pulse">Processando...</span>
                        ) : (
                          <>
                            <CreditCard className="w-5 h-5 mr-2" />
                            Finalizar Compra
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl"><Gift className="w-5 h-5 mr-2 text-green-600" /> Cupom de Desconto</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-2">
                        <Input placeholder="Digite o seu cupom" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                        <Button onClick={applyCoupon} variant="outline">Aplicar</Button>
                      </div>
                      {appliedCoupon && <p className="text-green-600 text-sm mt-2">Cupom {appliedCoupon.code} aplicado!</p>}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* EFEITO SEPARADOR PARA O RODAPÉ QUANDO O CARRINHO ESTÁ VAZIO */}
      {!hasItems && (
         <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      )}

      <Footer />
    </div>
  )
}
