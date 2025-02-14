"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  description?: string;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

const filterTags = ["Spring", "Smart", "Modern"];

const filterSections: FilterSection[] = [
  {
    title: "Categorias",
    options: [
      {
        id: "cat1",
        label: "Label",
        description: "Description",
      },
      {
        id: "cat2",
        label: "Label",
        description: "Description",
      },
      {
        id: "cat3",
        label: "Label",
        description: "Description",
      },
    ],
  },
  {
    title: "Tamanho",
    options: [
      { id: "size1", label: "Label" },
      { id: "size2", label: "Label" },
      { id: "size3", label: "Label" },
    ],
  },
  {
    title: "Materiais",
    options: [
      { id: "size4", label: "Label" },
      { id: "size5", label: "Label" },
      { id: "size6", label: "Label" },
    ],
  },
];

export function SidebarFilter() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>(filterTags);
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleCheckboxChange = (checked: boolean, id: string) => {
    setSelectedOptions(
      checked
        ? [...selectedOptions, id]
        : selectedOptions.filter((item) => item !== id),
    );
  };

  return (
    <div className="w-64 p-4 space-y-6">
      <div>
        <h2 className="text-sm font-medium mb-2">Filtro</h2>
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {tag}
              <button
                onClick={() => handleTagRemove(tag)}
                className="hover:bg-muted rounded-full"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      {filterSections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-sm font-medium">{section.title}</h3>
          <div className="space-y-3">
            {section.options.map((option) => (
              <div key={option.id} className="flex items-start space-x-2">
                <Checkbox
                  id={option.id}
                  checked={selectedOptions.includes(option.id)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(checked as boolean, option.id)
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor={option.id}>{option.label}</Label>
                  {option.description && (
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Faixa de preço</h3>
        <div className="px-2">
          <Slider
            defaultValue={priceRange}
            max={100}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
