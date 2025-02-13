"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label?: string;
  placeholder: string;
  items: { label: string; onClick: () => void }[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (label: string, onClick: () => void) => {
    setSelected(label);
    onClick();
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-[460px]" ref={dropdownRef}>
      {label && (
        <label className="block text-gray-500 text-sm mb-1">{label}</label>
      )}
      <div>
        <button
          type="button"
          className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={handleTriggerClick}
        >
          <span className={selected ? "text-gray-700" : "text-gray-500"}>
            {selected || placeholder}
          </span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          onKeyDown={handleKeyDown}
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleItemClick(item.label, item.onClick)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
