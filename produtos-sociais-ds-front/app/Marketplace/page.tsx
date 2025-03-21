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
  picture: string;
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
  const [allProducts, setAllProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<number | null>(500);
  const [sizeFilter, setSizeFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Estados para armazenar as opções de filtro disponíveis
  const [categories, setCategories] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      let url = "http://localhost:3000/products";

      // Construir os parâmetros de filtro dinamicamente
      const queryParams = new URLSearchParams();
      if (categoryFilter) queryParams.append("category", categoryFilter);
      if (priceFilter) queryParams.append("price", priceFilter.toString());
      if (sizeFilter) queryParams.append("size", sizeFilter);

      if (queryParams.toString()) {
        url += `?${queryParams.toString()}`;
      }

      const response = await fetch(url, { credentials: "include" });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const apiProducts: ApiProduct[] = await response.json();

      setAllProducts(apiProducts);

      // Extraindo categorias e tamanhos únicos
      const uniqueCategories = [...new Set(apiProducts.map((p) => p.category))];
      const uniqueSizes = [
        ...new Set(apiProducts.filter((p) => p.size).map((p) => p.size || "")),
      ];

      setCategories(uniqueCategories);
      setSizes(uniqueSizes);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
      setError(err instanceof Error ? err.message : "Erro ao buscar produtos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Filtro de produtos local (incluindo busca por nome)
  useEffect(() => {
    const filteredProducts = allProducts.filter((product) => {
      return (
        (!categoryFilter || product.category === categoryFilter) &&
        (priceFilter === null || product.price <= priceFilter) &&
        (!sizeFilter || product.size === sizeFilter) &&
        (!searchTerm ||
          product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Paginação com limite de 8 produtos por página
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(
      startIndex,
      startIndex + itemsPerPage,
    );

    setProducts(
      paginatedProducts.map((product) => ({
        id: product.id,
        name: product.productName,
        price: Number(product.price),
        image: product.picture || "/artesanato1.jpg",
        category: product.category,
      })),
    );

    const calculatedTotalPages = Math.ceil(
      filteredProducts.length / itemsPerPage,
    );
    setTotalPages(calculatedTotalPages);

    // 🔹 Garante que a página atual não ultrapasse o número de páginas disponíveis
    if (currentPage > calculatedTotalPages) {
      setCurrentPage(Math.max(1, calculatedTotalPages));
    }
  }, [
    allProducts,
    categoryFilter,
    priceFilter,
    sizeFilter,
    searchTerm,
    currentPage,
  ]);

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-4 px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-8 items-center mb-4">
          <div className="w-full sm:w-auto">
            <input
              type="search"
              placeholder="Pesquisar..."
              className="w-full sm:w-64 px-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h1 className="text-2xl font-bold text-[#0B236D] mb-4 sm:mb-0">
            Nossos produtos
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <SidebarFilter
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              sizeFilter={sizeFilter}
              setSizeFilter={setSizeFilter}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
              categories={categories}
              sizes={sizes}
            />
          </aside>

          <main className="flex-1">
            {loading ? (
              <p>Carregando produtos...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : products.length === 0 ? (
              <p>Nenhum produto encontrado com os filtros atuais.</p>
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

                {/* 🔹 Paginação existente ajustada */}
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
