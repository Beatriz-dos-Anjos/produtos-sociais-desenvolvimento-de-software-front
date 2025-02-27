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
  name: "Conjunto de palha",
  price: 50.0,
  maker: "Daniela Alves",
  ong: "Mãos unidas",
  contact: "(81) 9999-9999",
  category: "Artesanato",
  region: "Pernambuco",
  description:
    "Este conjunto de artesanato de palha é composto por uma cesta decorativa, um jogo de porta-copos e um chapéu de palha estilizado. As peças são feitas manualmente com técnicas tradicionais de trançado, valorizando a cultura artesanal brasileira. As fibras naturais são cuidadosamente selecionadas para garantir resistência e beleza, sendo tingidas com corantes naturais para criar padrões únicos. O design combina funcionalidade e estética, tornando o conjunto ideal para presentear ou decorar ambientes com um toque rústico e elegante.",
  colors: ["bege", "marrom"],
  images: ["/artesanato1.jpg", "/artesanato2.jpg"],
  artisan: {
    name: "Daniela Alves",
    place: "Ibura - Recife",
    story:
      "Daniela começou a trabalhar com artesanato desde a infância, e sua paixão por criar peças únicas a levou a abrir seu próprio negócio.",
  },
  relatedProducts: [
    {
      name: "Cesta de palha",
      price: 30.0,
      image: "/cesta.jpg",
      maker: "Maria Silva",
      ong: "Mãos unidas",
    },
    {
      name: "Decoração de parede",
      price: 40.0,
      image: "/decoracao.jpg",
      maker: "João Pereira",
      ong: "Mãos unidas",
    },
  ],
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
