import { signIn } from "next-auth/react";

import { useRegisterForm } from "@/hooks/use-register-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    authError,
    hasCredentials,
    oauthProviders
  } = useRegisterForm();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Criar Conta</h1>

        {authError && <p className="text-red-500 text-sm text-center">{authError}</p>}

        {hasCredentials && (
          <>
            <Input placeholder="Nome" {...register("name")} />
            <p className="text-sm text-red-500">{String(errors.name?.message || "")}</p>

            <Input type="email" placeholder="Email" {...register("email")} />
            <p className="text-sm text-red-500">{String(errors.email?.message || "")}</p>

            <Input type="password" placeholder="Senha" {...register("password")} />
            <p className="text-sm text-red-500">{String(errors.password?.message || "")}</p>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </>
        )}

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
      </form>
    </div>
  );
}