"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthKitConfig } from "@/components/auth-provider";

export function useRequireAuth() {
  const { status } = useSession();
  const router = useRouter();
  const { redirects } = useAuthKitConfig();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(redirects?.afterLogout || "/");
    }
  }, [status, router, redirects]);

  return {
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };
}
