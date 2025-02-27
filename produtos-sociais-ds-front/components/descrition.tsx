"use client";

import { useState } from "react";

interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({ description }: ProductDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // Adjust this value to change the initial visible text length

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Descrição do produto
      </h2>
      <p className="text-gray-600 mt-2">
        {isExpanded ? description : `${description.slice(0, maxLength)}...`}
        {description.length > maxLength && (
          <button
            onClick={toggleReadMore}
            className="text-blue-600 font-semibold ml-1 focus:outline-none"
          >
            {isExpanded ? "Veja menos" : "Veja mais"}
          </button>
        )}
      </p>
    </div>
  );
}
