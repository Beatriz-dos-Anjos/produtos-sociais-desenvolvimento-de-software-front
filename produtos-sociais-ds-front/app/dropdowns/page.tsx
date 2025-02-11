"use client"
import { Dropdown } from "@/components/dropdown"
export default function Home() {
  const handleItemClick = (item: string) => {
    console.log(`Selected: ${item}`)
  }

  const dropdownItems = [
    { label: "Unidade 1", onClick: () => handleItemClick("Unidade 1") },
    { label: "Unidade 2", onClick: () => handleItemClick("Unidade 2") },
    { label: "Unidade 3", onClick: () => handleItemClick("Unidade 3") },
  ]
  const dropdownItems2 = [
    { label: "ONG 1", onClick: () => handleItemClick("ONG 1") },
    { label: "ONG 2", onClick: () => handleItemClick("ONG 2") },
    { label: "ONG 3", onClick: () => handleItemClick("ONG 3") },
  ]
  return (
    <div className="min-h-screen flex items-center justify-center p-4 flex-col gap-4">
      <Dropdown label="Unidades Disponíveis" placeholder="Placeholder" items={dropdownItems} />
      <Dropdown label="ONGs Afiliadas" placeholder="Placeholder" items={dropdownItems2} />

    </div>
  )
}

