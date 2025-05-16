import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegisterForm } from "@/hooks/use-register-form";

export function RegisterDefault() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    authError
  } = useRegisterForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full space-y-6 p-8 bg-white shadow-xl rounded-xl border">
        <h1 className="text-2xl font-bold text-center">Criar Conta</h1>

        {authError && <p className="text-sm text-red-500">{authError}</p>}

        <Input placeholder="Nome" {...register("name")} />
        <p className="text-sm text-red-500">{String(errors.name?.message || "")}</p>

        <Input placeholder="Email" type="email" {...register("email")} />
        <p className="text-sm text-red-500">{String(errors.email?.message || "")}</p>

        <Input placeholder="Senha" type="password" {...register("password")} />
        <p className="text-sm text-red-500">{String(errors.password?.message || "")}</p>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </form>
    </div>
  );
}