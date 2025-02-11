"use client"
import { Pagination } from "@/components/Pagination"
import { useState } from "react"


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10 // Este valor deve ser dinâmico, baseado nos seus dados reais

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Aqui você pode adicionar lógica adicional, como buscar novos dados para a página
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        size="small" // ou "large"
      />
    </div>
  )
}

