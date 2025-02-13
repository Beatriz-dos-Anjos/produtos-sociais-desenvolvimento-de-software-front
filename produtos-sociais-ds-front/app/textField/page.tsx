import { DM_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Buttons() {
  return (
    <div
      className={dmSans.className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      <div className="relative w-full max-w-sm">
        <div className="relative">
          <label
            htmlFor="nome-produto"
            className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
          >
            Nome do Produto
          </label>
          <Input
            type="text"
            id="nome-produto"
            placeholder="Ex: Chapéu de palha"
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="relative w-full max-w-sm">
        <div className="relative">
          <label
            htmlFor="nome-artesao"
            className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
          >
            Nome do Artesão Responsável
          </label>
          <Input
            type="text"
            id="nome-artesao"
            placeholder="Ex: João da Silva"
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="relative w-full max-w-2xl">
        <div className="relative">
          <label
            htmlFor="contato-artesao"
            className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
          >
            Contato do Artesão Responsável
          </label>
          <Input
            type="text"
            id="contato-artesao"
            placeholder="Ex: (11) 99999-9999"
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="relative w-full max-w-sm">
        <div className="relative">
          <label
            htmlFor="descricao-produto"
            className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
          >
            Descrição do Produto
          </label>
          <Input
            type="text"
            id="descricao-produto"
            placeholder="Ex: Chapéu de palha tem ...."
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
}
