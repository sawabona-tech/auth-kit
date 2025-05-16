import { render, screen } from "@testing-library/react";
import { RegisterPage } from "@/components/register-page";
import { AuthProvider } from "@/components/auth-provider";
import { mockUseSession } from "./utils/mockSession";
import { vi } from "vitest";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

beforeEach(() => {
  mockPush.mockClear();
});


describe("RegisterPage", () => {
  it("renderiza campos de nome, email e senha", () => {
    mockUseSession("unauthenticated");

    render(
      <AuthProvider
        config={{
          providers: ["credentials"],
          baseUrl: "https://api.test.com",
        }}
      >
        <RegisterPage />
      </AuthProvider>
    );

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cadastrar/i })).toBeInTheDocument();
  });
});