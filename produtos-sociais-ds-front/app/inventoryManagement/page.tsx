"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/headerLogged";
import Footer from "@/components/ui/footer";
import ModalDelete from "./modal";
import { Pagination } from "@/components/Pagination";

export default function GerenciamentoDeEstoque() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [excludeItem, setItem] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  // Buscar produtos ao montar:
  useEffect(() => {
    fetch("http://localhost:3018/products", { //Link Local!
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleModal = (id: number | null) => {
    setItem(id);
  };

  const deleteItems = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3018/products/${id}`, { 
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",

        }
      });
      if (response.ok) {
        setProducts((prev) => prev.filter((p: any) => p.id !== id));
        setItem(null);
      } else {
        console.error("Erro ao excluir produto:", response.statusText);
      }
    } catch (err) {
      console.error("Erro ao excluir:", err);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <Link href="/home" className="text-[#3340FA] mb-6 inline-flex items-center hover:underline">
            <span className="mr-2">←</span> Voltar
          </Link>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#294BB6]">Artesanatos publicados:</h1>
            <button
              className="bg-[#00E69A] text-[#0B236D] px-5 py-2 rounded-lg hover:bg-[#00B374] transition-colors flex items-center gap-2 shadow-md font-medium"
              onClick={() => router.push("/createProduct")}
            >
              <Image src="/download.svg" alt="Download" width={20} height={20} />
              <span>Adicionar novo artesanato</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {products.map((product: any) => (
              <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm">
                <Image
                  src={product.picture || "/placeholder.jpg"}
                  alt={`Imagem do produto: ${product.productName}`}
                  width={200}
                  height={200}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <h2 className="text-sm font-bold text-[#1E293B] mb-1">
                  {product.productName}
                </h2>
                <div className="space-y-0.5 text-sm mb-3">
                  <p className="text-[#3340FA]">Preço: {product.price}</p>
                  <p className="text-[#3340FA]">Artesão: {product.craftsmanName }</p>
                  <p className="text-[#3340FA]">Categoria: {product.category}</p>
                  <p className="text-[#3340FA]">Descrição: {product.description}</p>
                  <p className="text-[#3340FA]">Tamanho: {product.size}</p>
                </div>
                <button
                  className="flex-1 py-1.5 px-3 bg-[#FA4A57] text-white text-sm rounded hover:bg-[#D1303E] transition-colors"
                  onClick={() => handleModal(product.id)}
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>

          {/* Modal de exclusão */}
          {excludeItem !== null && (
            <ModalDelete
              onClose={() => handleModal(null)}
              handleDelete={() => deleteItems(excludeItem)}
            />
          )}

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
