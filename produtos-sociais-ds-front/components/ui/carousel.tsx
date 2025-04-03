"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface Product {
  productName: string;
  price: number;
  picture?: string;
}

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 4 });
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3018/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 5)))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className={`${dmSans.className} bg-white p-8`}>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-transparent border-none p-0"
          onClick={scrollPrev}
        >
          <Image src="/arrowLeft.svg" alt="Anterior" width={24} height={24} />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/4 p-4 text-center flex flex-col items-center"
                >
                  <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.picture || "/placeholder.jpg"}
                      alt={product.productName}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[#1E293B] font-medium text-sm mt-2">
                    {product.productName}
                  </h3>
                  <p className="text-[#1E293B] font-semibold mt-2">
                    R$ {Number(product.price).toFixed(2)}
                  </p>
                  <Button
                    className="mt-4 bg-[#6672FA] text-white"
                    onClick={() => router.push("/Marketplace")}
                  >
                    Eu quero!
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-center w-full">Nenhum produto disponível.</p>
            )}
          </div>
        </div>

        {/* Botão direito */}
        <button
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-transparent border-none p-0"
          onClick={scrollNext}
        >
          <Image src="/arrowRight.svg" alt="Próximo" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
