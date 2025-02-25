import Header from "@/components/ui/headerLogged";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function createOng() {
  return (
    <div className="flex flex-col gap-7 ">
      <Header />
      <Image src={logo} alt={"logo"} width={0} height={0} />
      <div
        style={{ fontFamily: dmSans.style.fontFamily, fontSize: "1.5rem" }}
        className="flex justify-center background-[#009FE3] text-black"
      >
        Sou ONG e quero participar do projeto
      </div>
    </div>
  );
}
