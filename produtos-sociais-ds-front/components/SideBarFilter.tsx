"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

// Definir as interfaces para os tipos de filtro
interface FilterOption {
  id: string;
  value: string;
  label: string;
}

interface FilterSection {
  title: string;
  type: "category" | "size";
  options: FilterOption[];
}

interface SidebarFilterProps {
  categoryFilter: string | null;
  setCategoryFilter: (category: string | null) => void;
  sizeFilter: string | null;
  setSizeFilter: (size: string | null) => void;
  priceFilter: number | null;
  setPriceFilter: (price: number | null) => void;
  categories: string[];
  sizes: string[];
}

export function SidebarFilter({
  categoryFilter,
  setCategoryFilter,
  sizeFilter,
  setSizeFilter,
  priceFilter,
  setPriceFilter,
  categories = [],
  sizes = [],
}: SidebarFilterProps) {
  // Converter as categorias e tamanhos em opções de filtro
  const filterSections: FilterSection[] = [
    {
      title: "Categorias",
      type: "category",
      options: categories.map((category, index) => ({
        id: `cat${index}`,
        value: category,
        label: category,
      })),
    },
    {
      title: "Tamanho",
      type: "size",
      options: sizes.map((size, index) => ({
        id: `size${index}`,
        value: size,
        label: size,
      })),
    },
  ];

  // Valor do slider de preço (mínimo e máximo)
  const [priceRange, setPriceRange] = React.useState([0, priceFilter || 500]);

  // Atualiza o filtro de preço quando o slider muda
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    setPriceFilter(value[1]);
  };

  // Manipula a mudança de checkbox para categoria ou tamanho
  const handleCheckboxChange = (
    checked: boolean,
    value: string,
    type: "category" | "size",
  ) => {
    if (type === "category") {
      setCategoryFilter(checked ? value : null);
    } else if (type === "size") {
      setSizeFilter(checked ? value : null);
    }
  };

  return (
    <div className="w-full p-4 space-y-6 border rounded-lg bg-white">
      {filterSections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-sm font-medium">{section.title}</h3>
          <div className="space-y-3">
            {section.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={
                    section.type === "category"
                      ? categoryFilter === option.value
                      : sizeFilter === option.value
                  }
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(
                      checked as boolean,
                      option.value,
                      section.type,
                    )
                  }
                />
                <label htmlFor={option.id} className="text-sm cursor-pointer">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Faixa de preço</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, priceFilter || 500]}
            max={500}
            step={1}
            value={priceRange}
            onValueChange={handlePriceChange}
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>R${priceRange[0]}</span>
            <span>R${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
