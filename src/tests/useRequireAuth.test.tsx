import { renderHook } from "@testing-library/react";
import { useRequireAuth } from "@/hooks/use-require-auth";
import { mockUseSession } from "./utils/mockSession";
import { vi } from "vitest";

const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe("useRequireAuth", () => {
  it("redireciona para logout se não autenticado", () => {
    mockUseSession("unauthenticated");

    renderHook(() => useRequireAuth());

    expect(mockPush).toHaveBeenCalledWith("/");
  });

  it("não redireciona se autenticado", () => {
    mockUseSession("authenticated");

    renderHook(() => useRequireAuth());

    expect(mockPush).not.toHaveBeenCalled();
  });
});