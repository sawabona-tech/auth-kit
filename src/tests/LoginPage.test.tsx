import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { mockUseSession } from "./utils/mockSession";

import { LoginPage } from "@/ui/login-page";
import { AuthProvider } from "@/core/auth-provider";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
    useRouter: () => ({ push: mockPush }),
}));

beforeEach(() => {
    mockPush.mockClear();
});


describe("LoginPage", () => {
    it("renderiza campos de email e senha", () => {
        mockUseSession("unauthenticated");

        render(
            <AuthProvider
                config={{
                    providers: ["credentials"],
                    baseUrl: "https://api.test.com",
                }}
            >
                <LoginPage />
            </AuthProvider>
        );

        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
    });
});