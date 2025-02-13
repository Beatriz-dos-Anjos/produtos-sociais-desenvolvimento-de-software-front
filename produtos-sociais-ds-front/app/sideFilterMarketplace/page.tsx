import { SidebarFilter } from "@/components/SideBarFilter"

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <div className="border border-[#D9D9D9] p-4">
        <SidebarFilter />
      </div>
      <main className="flex-1 p-6">{/* Seu conteúdo principal aqui */}</main>
    </div>
  )
}

