import { render, screen, fireEvent } from "@testing-library/react";
import RelatedProducts from "@/components/RelatedProducts";
import "@testing-library/jest-dom";

jest.mock("next/font/google", () => ({
  DM_Sans: jest.fn().mockReturnValue({ className: "mocked-font" }), // Mock da função DM_Sans
}));

// Mock da biblioteca EmblaCarousel para que possamos testá-la sem depender da implementação real
jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [null, { scrollPrev: jest.fn(), scrollNext: jest.fn() }],
}));

describe("RelatedProducts", () => {
  it("deve renderizar o componente corretamente", () => {
    render(<RelatedProducts />);

    // Verifica se o título está sendo exibido
    expect(screen.getByText("Também podem te interessar")).toBeInTheDocument();

    // Verifica se a primeira imagem está sendo exibida
    expect(
      screen.getByAltText("Decoração Flor Papel De Parede Sala Varanda"),
    ).toBeInTheDocument();

    // Verifica se o preço está sendo exibido
    expect(screen.getByText("R$ 24,90")).toBeInTheDocument();

    // Verifica se o botão "Eu quero!" está sendo exibido
    expect(screen.getByText("Eu quero!")).toBeInTheDocument();
  });

  it("deve chamar a função scrollPrev ao clicar no botão de navegação anterior", () => {
    const { getByAltText } = render(<RelatedProducts />);

    const prevButton = getByAltText("Anterior");
    fireEvent.click(prevButton);

    // Verifica se a função scrollPrev foi chamada
    expect(
      require("embla-carousel-react").default()[1].scrollPrev,
    ).toHaveBeenCalled();
  });

  it("deve chamar a função scrollNext ao clicar no botão de navegação próximo", () => {
    const { getByAltText } = render(<RelatedProducts />);

    const nextButton = getByAltText("Próximo");
    fireEvent.click(nextButton);

    // Verifica se a função scrollNext foi chamada
    expect(
      require("embla-carousel-react").default()[1].scrollNext,
    ).toHaveBeenCalled();
  });
});
