import { useEffect } from "react";

/**
 * Hook reactivo do pacote @sawabona/auth-kit
 */
export function useThemeTokens(tokens?: Record<string, string>) {
  useEffect(() => {
    if (!tokens) return;

    const root = document.documentElement;

    Object.entries(tokens).forEach(([key, value]) => {
      if (key.startsWith("--")) {
        root.style.setProperty(key, value);
      }
    });
  }, [tokens]);
}
