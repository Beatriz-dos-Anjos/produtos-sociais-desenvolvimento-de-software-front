// src/components/ProductCard.tsx

import React from "react";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        {product.image.startsWith("data:") ? (
          // Para imagens Base64
          <div
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        ) : (
          // Para imagens com caminhos de arquivo
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-medium text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[#0B236D] font-bold">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
