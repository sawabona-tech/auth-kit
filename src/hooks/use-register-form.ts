import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthKitConfig } from "@/components/auth-provider";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Senha muito curta"),
});

type RegisterFormData = z.infer<typeof schema>;

export function useRegisterForm() {
  const { baseUrl, redirects, validation, providers } = useAuthKitConfig();
  const router = useRouter();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(validation?.register ?? schema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setAuthError("");
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push(redirects?.afterLogin || "/dashboard");
    } else {
      setAuthError("Erro ao registrar");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    authError,
    hasCredentials: providers.includes("credentials"),
    oauthProviders: providers.filter((p) => p !== "credentials"),
  };
}
