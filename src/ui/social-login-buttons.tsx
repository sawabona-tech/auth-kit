import { signIn } from "next-auth/react";

import { useAuthKitConfig } from "@/core/auth-provider";
import { Button } from "@/ui/button";

/**
 * Renderiza apenas os botões de login social definidos em `providers`.
 */
export function SocialLoginButtons() {
  const { providers } = useAuthKitConfig();
  const oauthProviders = providers.filter((p) => p !== "credentials");

  return (
    <>
      {oauthProviders.map((provider) => (
        <Button
          key={provider}
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => signIn(provider)}
        >
          Entrar com {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </Button>
      ))}
    </>
  );
}
