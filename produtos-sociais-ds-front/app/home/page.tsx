import Header from "@/components/ui/headerNotLogged";
import logo from "../../public/logo.svg";
import Image from "next/image";
import whoAreWe from "../../public/whoAreWe.svg";
import { DM_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/ui/carousel";
import participantOngs from "../../public/participantOngs.svg";
import Footer from "@/components/ui/footer";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function Home() {
  return (
    <div className="flex flex-col gap-4 ">
      <Header />
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 p-14 mt-12">
          <Image src={logo} alt="Logo" />
          <div
            className="flex flex-col text-thin font-thin items-center ml-24 mt-8"
            style={{ fontFamily: dmSans.style.fontFamily }}
          >
            {" "}
            <div style={{ fontWeight: "bold" }}>
              Artesanato único, feito com alma e coração
            </div>
            <br></br>
            <br></br>
            Descubra o encanto do feito à mão e apoie <br></br> talentos únicos:
            explore agora nosso universo <br></br> de artesanatos com propósito.
          </div>
          <div className="flex ml-40">
            <Button
              className={`w-[142px] h-[35px] bg-[#6672FA] text-white rounded-[4px] ${dmSans.className}`}
            >
              Compre agora
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "30rem" }}>
          <Image
            src="productsLandingPage.svg"
            width={500}
            height={500}
            alt="Home Image"
          />
        </div>
      </div>
      <ProductCarousel />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            marginLeft: "1.5rem",
            fontFamily: dmSans.style.fontFamily,
            fontSize: "1.5rem",
            color: "#3340FA",
            gap: "4",
            flexDirection: "column",
          }}
        >
          <div className="font-bold"> Quem somos?</div>
          <div style={{ display: "flex", fontSize: "0.75rem" }}>
            O Bora Impactar é uma iniciativa do governo para ampliar o comércio
            em produções de pessoas de ONGs.
          </div>
          <div className="mt-40">
            {" "}
            <Button
              className={`w-[142px] h-[35px] bg-[#6672FA] text-white rounded-[4px]${dmSans.className}`}
            >
              Saber mais
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "26rem" }}>
          <Image src={whoAreWe} alt="Foto de uma mulher fazendo artesanato" />
        </div>
      </div>
      <div
        style={{
          marginLeft: "1.5rem",
          fontFamily: dmSans.style.fontFamily,
          fontSize: "1.5rem",
          color: "#3340FA",
          gap: "4",
          flexDirection: "column",
          marginTop: "5rem",
        }}
      >
        <div className="font-bold"> ONGs participantes</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "1.50rem",
          }}
        >
          {" "}
          <Image src={participantOngs} alt="ONGs participantes" />
          <Image src={participantOngs} alt="ONGs participantes" />
          <Image src={participantOngs} alt="ONGs participantes" />
          <Image src={participantOngs} alt="ONGs participantes" />
          <Image src={participantOngs} alt="ONGs participantes" />
        </div>
      </div>
      <Footer />{" "}
    </div>
  );
}
