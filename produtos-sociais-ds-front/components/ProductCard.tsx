import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 ease-in-out cursor-pointer
                 hover:scale-105 hover:shadow-lg group"
    >
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <Image
            src={product.image.startsWith("/") ? product.image : `/placeholder.svg`}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <h3 className="font-medium text-foreground">{product.name}</h3>
        <p className="text-primary font-semibold">R$ {product.price.toFixed(2).replace(".", ",")}</p>
      </CardFooter>
    </Card>
  )
}

