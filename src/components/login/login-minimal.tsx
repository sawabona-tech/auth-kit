import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoginForm } from "@/hooks/use-login-form";


export function LoginMinimal() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    authError
  } = useLoginForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-8 space-y-6 shadow-md rounded-xl bg-white border">
        <h1 className="text-2xl font-bold text-center">Login Minimalista</h1>
        {authError && <p className="text-sm text-red-500">{authError}</p>}
        <div>
          <Input type="email" placeholder="Email" {...register("email")} />
          <p className="text-sm text-red-500">{String(errors.email?.message || "")}</p>
        </div>
        <div>
          <Input type="password" placeholder="Senha" {...register("password")} />
          <p className="text-sm text-red-500">{String(errors.password?.message || "")}</p>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
}