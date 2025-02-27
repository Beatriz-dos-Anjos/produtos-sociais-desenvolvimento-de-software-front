import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["800", "400", "900"] });

export default function Footer() {
  return (
    <footer
      className={`${dmSans.className} bg-[#6672FA] text-white py-20 px-20 border-t border-white/20`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Image
            src="/Vector.svg"
            alt="Recife Prefeitura"
            width={150}
            height={40}
          />
          <h2 className="mt-4 font-extrabold text-lg">Recife do Bem</h2>
          <p className="text-sm text-white mt-2">
            A união que transforma vidas
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center flex-1">
          <h3 className="font-semibold text-base mb-4">Portal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/Marketplace"
                className="hover:underline hover:opacity-80"
              >
                Área de compras
              </Link>
            </li>
            <li>
              <Link href="/home" className="hover:underline hover:opacity-80">
                Quem somos
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline hover:opacity-80">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline hover:opacity-80">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="font-bold text-base mb-4 uppercase tracking-wide">
            Siga as nossas redes!
          </h3>
          <div className="flex justify-center space-x-4">
            <Link href="https://x.com/prefrecife">
              <Image
                src="/XLogo.svg"
                alt="X"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="https://www.instagram.com/prefeiturarecife/?hl=pt-br">
              <Image
                src="/InstagramLogo.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="https://www.youtube.com/prefrecife">
              <Image
                src="/YoutubeLogo.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="https://br.linkedin.com/company/prefrecife">
              <Image
                src="/LinkedinLogo.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
