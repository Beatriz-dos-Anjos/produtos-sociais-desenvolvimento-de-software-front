"use client";

import logo from "../../public/logo.svg";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import UploadImage from "@/components/uploadComponent";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import api from "@/services/api";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

//Formato dos dados dos produtos (verificar imagem)
type ProductFormData = {
  nome: string;
  artesao: string;
  contato: string;
  ongAfiliada: string;
  unidadesDisponiveis: string;
  preco: string;
  descricao: string;
  categoria: string;
};

export default function CreateProduct() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione um arquivo de imagem válido (JPG ou PNG).");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("O arquivo é muito grande! Escolha uma imagem de até 2MB.");
      return;
    }

    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  // Função para converter a imagem em 64
  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data: ProductFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      let pictureBase64 = "";
      if (imageFile) {
        pictureBase64 = await convertImageToBase64(imageFile);
      }

      const productData = {
        productName: data.nome,
        craftsmanName: data.artesao,
        whatsappNumber: data.contato,
        linkedONG: data.ongAfiliada,
        units: Number(data.unidadesDisponiveis),
        category: data.categoria,
        price: parseFloat(data.preco),
        description: data.descricao,
        picture: pictureBase64,
      };

      // Resgata o token
      const token = localStorage.getItem("token");

      // Faz a requisição
      const response = await api.post("/products", productData, {
        headers: {
          "Content-Type": "application/json", // ✅ Agora enviamos JSON corretamente
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Produto cadastrado com sucesso:", response.data);

      // Redirecionamento pra home
      router.push("/home");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      setSubmitError(
        "Ocorreu um erro ao cadastrar o produto. Por favor, tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center p-4 flex-col gap-4 ${dmSans.className}`}
    >
      <div className="">
        <Image src={logo} alt="Logo" />
        <div className="flex text-2xl font-bold items-center ml-24 mt-8">
          Cadastrar Produto
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full max-w-2xl"
      >
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
            {...register("nome", { required: "Nome do produto é obrigatório" })}
          />
        </div>

        <div className="ml-4 mt-8 flex flex-col">
          <strong>Foto</strong>
          <div>A foto deverá ser JPG/PNG</div>
        </div>
        <div className="w-13 space-y-2 p-4">
          <UploadImage onFileSelect={handleFileSelect} className="w-full" />
          {imageUrl && (
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt="Uploaded preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="relative w-full max-w-2xl mt-5">
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
            className="w-full rounded-md border border-gray-300 px-3 py-3"
            {...register("artesao", {
              required: "Nome do artesão é obrigatório",
            })}
          />
        </div>

        <div className="relative w-full max-w-2xl mt-3">
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
            className="w-full rounded-md border border-gray-300 px-3 py-3"
            {...register("contato", { required: "Contato é obrigatório" })}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl items-center mt-2">
          <div className="flex flex-col mb-2">
<<<<<<< HEAD
            <div className="ml-2">Nome da ONG</div>
=======
            <div
              className="ml-2"
              style={{ fontSize: "14px", color: "#787878" }}
            >
              ONG afiliada
            </div>
>>>>>>> 78b1ece6490ca00f7aedd11ab5b0285490d200ac
            <Input
              type="text"
              id="ongs-afiliadas"
              placeholder="Nome da ONG"
              {...register("ongAfiliada")}
            />
          </div>
          <div className="flex flex-col mb-2">
<<<<<<< HEAD
            <div className="ml-2">Estoque Disponível</div>
=======
            <div
              className="ml-2"
              style={{ fontSize: "14px", color: "#787878" }}
            >
              Estoque Disponível
            </div>
>>>>>>> 78b1ece6490ca00f7aedd11ab5b0285490d200ac
            <Input
              type="text"
              id="estoque-disponivel"
              placeholder="Quantidade"
              {...register("unidadesDisponiveis")}
            />
          </div>
          <div className="flex flex-col mb-2">
<<<<<<< HEAD
            <div className="ml-2">Preço</div>
=======
            <div
              className="ml-2"
              style={{ fontSize: "14px", color: "#787878" }}
            >
              Preço
            </div>
>>>>>>> 78b1ece6490ca00f7aedd11ab5b0285490d200ac
            <Input
              type="text"
              id="preco"
              placeholder="R$ 0,00"
              {...register("preco")}
            />
          </div>
        </div>

        <div className="relative w-full max-w-2xl mt-3">
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
            {...register("descricao")}
          />
        </div>

        <div className="relative w-full max-w-2xl mt-3">
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
            {...register("categoria")}
          />
        </div>

        <Button
          type="submit"
          className="w-[242px] h-[42px] bg-[#6672FA] text-white rounded-[4px] mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adicionando..." : "Adicionar Produto"}
        </Button>
      </form>
    </div>
  );
}
