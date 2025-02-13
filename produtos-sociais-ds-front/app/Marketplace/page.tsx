"use client"

import { Pagination } from "@/components/Pagination"
import { SidebarFilter } from "@/components/SideBarFilter"
import ProductCard from "@/components/ProductCard"
import type { Product } from "@/components/ProductCard"

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Bacia Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
  {
    id: 2,
    name: "Vaso Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
  {
    id: 3,
    name: "Bolsa Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
  {
    id: 4,
    name: "Base de prato Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
  {
    id: 5,
    name: "Bacia Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
  {
    id: 6,
    name: "Vaso Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
  {
    id: 7,
    name: "Bolsa Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
  {
    id: 8,
    name: "Base de prato Palha",
    price: 24.9,
    image: "/artesanato1.jpg",
    category: "Palha",
  },
]

export default function Page() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4">
          {/* Search Bar and Title */}
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-4">
            <div className="w-full sm:w-auto">
              <input type="search" placeholder="Pesquisar..." className="w-full sm:w-64 px-4 py-2 border rounded-lg" />
            </div>
            <h1 className="text-2xl font-bold text-[#0B236D] mb-4 sm:mb-0">Nossos produtos</h1>
          </div>
  
          <div className="flex flex-col md:flex-row gap-8">
            {/* Side Filter */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <SidebarFilter />
            </aside>
  
            {/* Main Content */}
            <main className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
  
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <Pagination
                  currentPage={1}
                  totalPages={68}
                  onPageChange={(page) => console.log(`Page changed to ${page}`)}
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
  