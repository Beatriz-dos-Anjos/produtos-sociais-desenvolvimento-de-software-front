import { useRouter } from "next/router";
import { useState } from "react";
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

export default function ProductPage({ productData }) {
  // Não precisamos mais do useState e useEffect pois os dados vêm diretamente do servidor

  if (!productData) return <p>Produto não encontrado.</p>;

  return (
    <div className={`${dmSans.className} bg-white`}>
      <Header />
      <ProductDetail product={productData} />
      <div className="container mx-auto px-4 py-8">
        <ProductDescription description={productData.description} />
        <div className="flex space-x-4 mt-4">
          <FavoriteButton />
          <ShareButton />
          <ReportButton />
        </div>
        <Separator />
        <DetailsDescription
          category={productData.category}
          ong={productData.ong}
          region={productData.region}
        />
        <Separator />
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
}

// Busca os dados no servidor antes da renderização
export async function getServerSideProps(context) {
  console.log('Params:', context.params);
  const { id } = context.params;
  
  // Se você tiver autenticação, pode adicionar esse trecho
  // const cookies = nookies.get(context);
  // const { ['accessToken']: accessToken } = parseCookies(context);
  // if (!accessToken) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   };
  // }
  
  try {
    // Fazendo a requisição ao seu backend
    const response = await fetch(`http://localhost:3000/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar produto: ${response.status}`);
    }
    
    const productData = await response.json();
    
    return {
      props: {
        productData
      }
    };
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    
    // Opção 1: Retornar uma página 404
    return { notFound: true };
    
    // Opção 2: Retornar produto vazio (descomente se preferir)
    // return {
    //   props: {
    //     productData: null
    //   }
    // };
  }
}