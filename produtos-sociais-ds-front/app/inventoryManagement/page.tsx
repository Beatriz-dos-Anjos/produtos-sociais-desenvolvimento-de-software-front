"use client";

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Pagination } from "@/components/Pagination";
import { useState } from "react";
import Header from "@/components/ui/headerLogged";
import Footer from "@/components/ui/footer";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const products = Array(10).fill({
  image: "/artesanato2.jpg",
  title: "Conjunto de bacias de palha",
  price: "R$24,90",
  stock: "9",
  artisan: "Aline Brito",
  status: "Ativo",
});

export default function GerenciamentoDeEstoque() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`${dmSans.className} min-h-screen flex flex-col`}>
      <Header />

      <main className="flex-1 p-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-[#3340FA] mb-6 inline-flex items-center hover:underline"
          >
            <span className="mr-2">←</span> Voltar
          </Link>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#294BB6]">
              Artesanatos publicados:
            </h1>
            <button className="bg-[#00E69A] text-[#0B236D] px-5 py-2 rounded-lg hover:bg-[#00B374] transition-colors flex items-center gap-2 shadow-md font-medium">
              <Image
                src="/download.svg"
                alt="Download"
                width={20}
                height={20}
              />
              <span>Adicionar novo artesanato</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <h2 className="text-sm font-bold text-[#1E293B] mb-1">
                  {product.title}
                </h2>
                <div className="space-y-0.5 text-sm mb-3">
                  <p className="text-[#3340FA]">Preço: {product.price}</p>
                  <p className="text-[#3340FA]">Estoque: {product.stock}</p>
                  <p className="text-[#3340FA]">Artesã: {product.artisan}</p>
                  <p className="text-[#3340FA]">Status: {product.status}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 px-3 border border-[#6672FA] text-[#6672FA] text-sm rounded hover:bg-[#6672FA] hover:text-white transition-colors">
                    Editar
                  </button>
                  <button className="flex-1 py-1.5 px-3 bg-[#FA4A57] text-white text-sm rounded hover:bg-[#D1303E] transition-colors">
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 gap-2">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              size="small"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
