import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCarousel from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: jest.fn(() => [
    jest.fn(),
    { scrollPrev: jest.fn(), scrollNext: jest.fn() },
  ]),
}));

describe("ProductCarousel", () => {
  it("deve renderizar corretamente os produtos", () => {
    render(<ProductCarousel />);

    // Verifica se os produtos estão na tela
    expect(
      screen.getByText("Decoração Flor Papel De Parede Sala Varanda"),
    ).toBeInTheDocument();
    expect(screen.getByText("R$ 24,90")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /eu quero/i })).toHaveLength(
      5,
    );
  });

  it("deve navegar para /Marketplace ao clicar no botão 'Eu quero!'", async () => {
    const routerPushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: routerPushMock });

    render(<ProductCarousel />);

    const botaoEuQuero = screen.getAllByRole("button", {
      name: /eu quero/i,
    })[0];
    await userEvent.click(botaoEuQuero);

    expect(routerPushMock).toHaveBeenCalledWith("/Marketplace");
  });

  it("deve permitir a navegação ao clicar nos botões de próximo e anterior", async () => {
    render(<ProductCarousel />);

    const botaoAnterior = screen.getByAltText("Anterior");
    const botaoProximo = screen.getByAltText("Próximo");

    await userEvent.click(botaoAnterior);
    await userEvent.click(botaoProximo);

    expect(botaoAnterior).toBeInTheDocument();
    expect(botaoProximo).toBeInTheDocument();
  });
});
