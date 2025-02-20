import Header from "@/components/ui/headerNotLogged";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function Home() {
  return (
    <div className="flex flex-col gap-4 ">
      <Header />
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 p-14 mt-12">
          <Image src={logo} alt="Logo" />
          <div
            className="flex text-2xl font-thin items-center ml-24 mt-8"
            style={{ fontFamily: dmSans.style.fontFamily }}
          >
            Artesanato único, feito com alma e coração
            <br></br>
            <br></br>
            Descubra o encanto do feito à mão e apoie <br></br> talentos únicos:
            explore agora nosso universo <br></br> de artesanatos com propósito.
          </div>
        </div>
      </div>
    </div>
  );
}
