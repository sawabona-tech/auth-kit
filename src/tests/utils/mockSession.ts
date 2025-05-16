import * as nextAuth from "next-auth/react";
import { vi } from "vitest";

type Status = "authenticated" | "unauthenticated";

export function mockUseSession(status: Status) {
  vi.spyOn(nextAuth, "useSession").mockReturnValue({
    status,
    data: status === "authenticated"
      ? { user: { id: "1", name: "Test User", email: "test@example.com" } }
      : null,
  });
}