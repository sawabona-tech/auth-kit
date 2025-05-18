import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { useAuthKitConfig } from "@/components/auth-provider";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Senha obrigatória"),
});

type LoginFormData = z.infer<typeof schema>;

export function useLoginForm() {
  const { redirects, validation, providers } = useAuthKitConfig();
  const router = useRouter();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(validation?.login ?? schema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setAuthError("");
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      router.push(redirects?.afterLogin || "/dashboard");
    } else {
      setAuthError("Credenciais inválidas");
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

