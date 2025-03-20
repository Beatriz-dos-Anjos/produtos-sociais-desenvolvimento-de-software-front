"use client";

import { Pagination } from "@/components/Pagination";
import { SidebarFilter } from "@/components/SideBarFilter";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/components/ProductCard";
import Header from "@/components/ui/headerNotLogged";
import Footer from "@/components/ui/footer";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Interface para representar os produtos vindos da API
interface ApiProduct {
  id: number;
  productName: string;
  craftsmanName: string;
  category: string;
  picture: string; // Base64 da imagem
  whatsappNumber: string;
  linkedONG: string;
  avalible: boolean;
  price: number;
  description: string;
  size?: string;
}

export default function Page() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [sizeFilter, setSizeFilter] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      // Definir a URL base
      let url = "http://localhost:3000/products";

      if (categoryFilter) {
        url = `http://localhost:3000/products/category/${categoryFilter}`;
      } else if (priceFilter) {
        url = `http://localhost:3000/products/price/${priceFilter}`;
      } else if (sizeFilter) {
        url = `http://localhost:3000/products/size/${sizeFilter}`;
      }

      // Buscar produtos
      const response = await fetch(url, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Falha ao carregar produtos");
      }

      const apiProducts: ApiProduct[] = await response.json();

      // Calcular total de páginas
      const itemsPerPage = 12;
      const totalItems = apiProducts.length;
      const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);

      // Paginação
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedProducts = apiProducts.slice(
        startIndex,
        startIndex + itemsPerPage,
      );

      // Mapear para o formato correto
      const formattedProducts: Product[] = paginatedProducts.map((product) => ({
        id: product.id,
        name: product.productName,
        price: Number(product.price),
        image: product.picture || "/artesanato1.jpg",
        category: product.category,
      }));

      setProducts(formattedProducts);
      setTotalPages(calculatedTotalPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao buscar produtos");
      console.error("Erro ao buscar produtos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, categoryFilter, priceFilter, sizeFilter]);

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-4 px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-8 items-center mb-4">
          <h1 className="text-2xl font-bold text-[#0B236D]">Nossos produtos</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <SidebarFilter />
          </aside>

          <main className="flex-1">
            {loading ? (
              <p>Carregando produtos...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() =>
                        router.push(`/productDetails/${product.id}`)
                      }
                    />
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
