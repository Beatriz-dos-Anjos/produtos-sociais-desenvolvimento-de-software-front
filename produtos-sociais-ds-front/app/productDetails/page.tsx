import { ProductDetail } from "@/components/productdetail";
import Header from "@/components/ui/headerNotLogged";
import Footer from "@/components/ui/footer";
import { FavoriteButton } from "@/components/FavoriteButton";
import { ReportButton } from "@/components/ReportButton";
import { ShareButton } from "@/components/ShareButton";
import { ProductDescription } from "@/components/descrition"; // Ensure this path is correct
import { DetailsDescription } from "@/components/detailsDescription";
import { ArtisanInfo } from "@/components/ArtsInfo";
import RelatedProducts from "@/components/RelatedProducts";
import { DM_Sans } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

// This would typically come from your database or API
const mockProduct = {
  name: "Pintura em Tela",
  price: 350.0,
  maker: "João Pintor",
  ong: "ONG Arte Viva",
  contact: "11988887777",
  category: "Quadros",
  region: "São Paulo",
  description: "Pintura artística em tela com moldura de madeira sustentável.",
  colors: ["Vermelho", "Azul"],
  images: ["https://imagem.com/pintura-tela.png"],
  artisan: {
    name: "João Pintor",
    place: "São Paulo",
    story: "Artista plástico há 10 anos.",
  },
  relatedProducts: [],
  size: "M", // 🔹 ADICIONANDO ESSA LINHA PARA CORRIGIR O ERRO
};

export default function ProductPage() {
  return (
    <div className={`${dmSans.className} bg-white`}>
      <Header />
      <ProductDetail product={mockProduct} />
      <div className="container mx-auto px-4 py-8">
        <ProductDescription description={mockProduct.description} />
        <div className="flex space-x-4 mt-4">
          <FavoriteButton />
          <ShareButton />
          <ReportButton />
        </div>
        <Separator />
        <DetailsDescription
          category={mockProduct.category}
          ong={mockProduct.ong}
          region={mockProduct.region}
        />
        <Separator />
        <ArtisanInfo
          artisanName={mockProduct.artisan.name}
          artisanPlace={mockProduct.artisan.place}
          artisanStory={mockProduct.artisan.story}
        />
        <Separator />
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
}
