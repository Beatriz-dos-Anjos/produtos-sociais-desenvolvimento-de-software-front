import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/ui/headerNotLogged";
import Footer from "@/components/ui/footer";
import { ProductDetail } from "@/components/productdetail";
import { FavoriteButton } from "@/components/FavoriteButton";
import { ReportButton } from "@/components/ReportButton";
import { ShareButton } from "@/components/ShareButton";
import { ProductDescription } from "@/components/descrition";
import { DetailsDescription } from "@/components/detailsDescription";
import RelatedProducts from "@/components/RelatedProducts";
import { DM_Sans } from "next/font/google";
import { Separator } from "@/components/ui/separator";

// Definindo a interface Product com as propriedades que esperamos
interface Product {
  id: number;
  name: string;
  price: number;
  maker: string;
  ong: string;
  contact: string;
  images: string[];
  description: string;
  category: string;
  region: string;
}

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Obtém o ID da URL
  const [product, setProduct] = useState<Product | null>(null);  // Tipo do estado ajustado para Product
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) throw new Error("Produto não encontrado");
        const data: Product = await response.json();  // Garantindo que o dado seja do tipo Product
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className={`${dmSans.className} bg-white`}>
      <Header />
      <ProductDetail product={product} />
      <div className="container mx-auto px-4 py-8">
        <ProductDescription description={product.description} />
        <div className="flex space-x-4 mt-4">
          <FavoriteButton />
          <ShareButton />
          <ReportButton />
        </div>
        <Separator />
        <DetailsDescription
          category={product.category}
          ong={product.ong}
          region={product.region}
        />
        <Separator />
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
}
