"use client";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import UploadImage from "@/components/uploadComponent";
import { useState } from "react";
import { Dropdown } from "@/components/dropdown";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function CreateProduct() {
  const [imageUrl, setImageUrl] = useState<string>();
  const router = useRouter();
  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };
  const handleItemClick = (item: string) => {
    console.log(`Selected: ${item}`);
  };
  const dropdownUnidades = [
    { label: "1", onClick: () => handleItemClick("Unidade 1") },
    { label: "2", onClick: () => handleItemClick("Unidade 2") },
    { label: "3", onClick: () => handleItemClick("Unidade 3") },
  ];
  const dropdownOngs = [
    { label: "ONG 1", onClick: () => handleItemClick("ONG 1") },
    { label: "ONG 2", onClick: () => handleItemClick("ONG 2") },
    { label: "ONG 3", onClick: () => handleItemClick("ONG 3") },
  ];
  return (
    <div
      className={`min-h-screen flex items-center p-4 flex-col gap-4 ${dmSans.className}`}
    >
      <div className="">
        <Image src={logo} alt="Logo" />
        <div className=" flex text-2xl font-bold items-center ml-24 mt-8">
          Cadastrar Produto
        </div>
      </div>
      <div className="relative w-full max-w-2xl">
        <div className="relative mt-9">
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
        <div className="ml-4 mt-8 flex flex-col">
          <strong>Foto</strong>
          <div>A foto deverá ser JPG/PNG</div>
        </div>
        <div className=" w-13 space-y-2 p-4">
          <UploadImage onFileSelect={handleFileSelect} className="w-full" />
          {imageUrl && (
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt="Uploaded preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
        <div className="relative w-full max-w-2xl mt-5">
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
      </div>

      <div className="relative w-full max-w-2xl mt-3">
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
      <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="w-full">
          <Dropdown
            label="ONGs Afiliadas"
            placeholder="Placeholder"
            items={dropdownOngs}
          />
        </div>
        <div className="w-full">
          <Dropdown
            label="Unidades Disponíveis"
            placeholder="Placeholder"
            items={dropdownUnidades}
          />
        </div>
        <div className="relative w-full mt-6">
          <label
            htmlFor="preco"
            className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
          >
            Preço
          </label>
          <Input
            type="text"
            id="preco"
            placeholder="R$ 0,00"
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div className="relative w-full max-w-2xl mt-3">
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
            placeholder="Ex: Chapéu de palha feito a mão"
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div className="relative w-full max-w-2xl mt-3">
        <div className="relative">
          <label
            htmlFor="categoria-produto"
            className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
          >
            Categoria
          </label>
          <Input
            type="text"
            id="categoria-produto"
            placeholder="Ex: Vestuário"
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <Button
        className={`w-[242px] h-[42px] bg-[#6672FA] text-white rounded-[4px] mt-6`}
        onClick={() => router.push("/home")}
      >
        Adicionar Produto
      </Button>
    </div>
  );
}
