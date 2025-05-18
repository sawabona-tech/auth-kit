import { renderHook } from "@testing-library/react";
import { vi } from "vitest";

import { mockUseSession } from "./utils/mockSession";

import { useRequireAuth } from "@/hooks/use-require-auth";

const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

beforeEach(() => {
  mockPush.mockClear();
});

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