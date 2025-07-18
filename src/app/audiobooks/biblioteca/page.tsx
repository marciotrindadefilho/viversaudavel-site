
'use client'

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Database } from "@/types/supabase";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Headphones, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

type Produto = Database["public"]["Tables"]["produtos"]["Row"];

export default function AudiobooksLibraryPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const supabase = createClient();

  useEffect(() => {
    async function fetchProdutos() {
      const { data } = await supabase
        .from("produtos")
        .select("*")
        .eq("tipo", "audiobook");
      setProdutos(data || []);
    }
    fetchProdutos();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Audiobooks</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((item) => (
              <Card key={item.id}>
                <div className="relative h-56">
                  <Image src={item.imagem || ""} alt={item.titulo} fill className="object-cover" />
                  <Badge className="absolute top-4 right-4 bg-golden-500 text-black shadow-md">Premium</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3h</div>
                    <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> 4.9</div>
                    <div className="flex items-center gap-2"><Headphones className="w-4 h-4" /> 500</div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Play className="w-4 h-4 mr-2" />
                    Ouvir Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
