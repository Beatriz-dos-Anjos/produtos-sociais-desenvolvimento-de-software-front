"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel2 } from "@/components/ui/carousel2";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface ProductDetailProps {
  product: {
    name: string;
    price: number;
    maker: string;
    ong: string;
    contact: string;
    images: string[];
  };
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={`${dmSans.className} bg-white`}>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 mb-8 text-sm">
          <Link href="/Marketplace" className="text-blue-600 hover:underline">
            Voltar
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images Carousel */}
          <div className="relative">
            <button
              className="absolute left-4 top-4 z-40 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart
                className={`w-6 h-6 transition-colors duration-300 ${
                  isLiked ? "text-[#7B61FF]" : "text-blue-600"
                }`}
              />
            </button>
            <Carousel2 images={product.images} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold">{product.name}</h1>

            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              10% de desconto no pix
            </div>

            <div className="text-3xl font-bold">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </div>

            <div className="space-y-2 text-gray-600">
              <p>Feito por: {product.maker}</p>
              <p>ONG Responsável: {product.ong}</p>
              <p>Contato: {product.contact}</p>
            </div>

            <Button
              className="w-full bg-[#6672FA] text-white hover:bg-[#5f6ae3] transition-colors duration-300"
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/https://api.whatsapp.com/send?1=pt_BR&phone=5500000000000",
                )
              }
            >
              Entrar em contato no WhatsApp
            </Button>
            <small>
              Obs: adicionar o telefone de contato na url de direcionamento, no
              lugar dos números 0 (zero)
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
