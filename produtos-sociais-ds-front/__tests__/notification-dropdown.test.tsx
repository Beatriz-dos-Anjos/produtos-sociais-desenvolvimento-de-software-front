import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotificationDropdown from "@/components/notification-dropdown";

describe("NotificationDropdown Component", () => {
  it("deve renderizar corretamente as notificações", () => {
    render(<NotificationDropdown closeDropdown={jest.fn()} />);
    expect(screen.getByText("Notificações")).toBeInTheDocument();
    expect(screen.getByText("Convite às ONGs")).toBeInTheDocument();
    expect(screen.getByText("Convite aos clientes")).toBeInTheDocument();
  });

  it("deve fechar o dropdown ao clicar fora", async () => {
    const mockCloseDropdown = jest.fn();
    render(<NotificationDropdown closeDropdown={mockCloseDropdown} />);

    // Verifica se o dropdown está visível antes do clique
    expect(screen.getByText("Notificações")).toBeInTheDocument();

    // Simula um clique fora do dropdown
    await userEvent.click(document.body);

    // Espera que a função `closeDropdown` seja chamada
    expect(mockCloseDropdown).toHaveBeenCalledTimes(1);
  });

  it("não deve fechar ao clicar dentro do dropdown", async () => {
    const mockCloseDropdown = jest.fn();
    render(<NotificationDropdown closeDropdown={mockCloseDropdown} />);

    // Obtém o container do dropdown
    const dropdown = screen.getByText("Notificações").closest("div");

    if (dropdown) {
      await userEvent.click(dropdown);
    }

    // Espera que a função `closeDropdown` NÃO tenha sido chamada
    expect(mockCloseDropdown).not.toHaveBeenCalled();
  });
});
