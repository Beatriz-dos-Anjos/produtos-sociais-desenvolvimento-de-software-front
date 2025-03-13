"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
jest.mock("next/font/google", () => ({
  DM_Sans: jest.fn(() => ({ className: "mocked-font" })),
}));

const products = Array(5).fill({
  image: "/artesanato2.jpg",
  title: "Decoração Flor Papel De Parede Sala Varanda",
  price: "R$ 24,90",
});

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 4 });
  const router = useRouter();
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
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/4 p-4 text-center flex flex-col items-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-[#1E293B] font-medium text-sm">
                  {product.title}
                </h3>
                <p className="text-[#1E293B] font-semibold mt-2">
                  {product.price}
                </p>
                <Button
                  className="mt-4 bg-[#6672FA] text-white"
                  onClick={() => router.push("/Marketplace")}
                >
                  Eu quero!
                </Button>
              </div>
            ))}
          </div>
        </div>
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
