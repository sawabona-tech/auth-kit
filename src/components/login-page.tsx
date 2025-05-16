"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthKitConfig } from "./auth-provider";
import { useState } from "react";
import { useForm } from "react-hook-form";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(1, "Senha obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function LoginPage() {
    const { redirects, theme, providers } = useAuthKitConfig();
    const router = useRouter();
    const [authError, setAuthError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        setAuthError("");

        const res = await signIn("credentials", {
            redirect: false,
            ...data,
        });

        if (res?.ok) {
            router.push(redirects?.afterLogin || "/dashboard");
        } else {
            setAuthError("Credenciais inválidas");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md w-full space-y-6 p-8 bg-white shadow-xl rounded-xl border"
            >
                <div className="text-center space-y-1">
                    <h1
                        className="text-3xl font-display"
                        style={{
                            color: theme?.primaryColor,
                            fontFamily: theme?.fontFamily,
                        }}
                    >
                        Sawabona Tech
                    </h1>
                    <p className="text-muted-foreground">Acesse sua conta</p>
                </div>

                {authError && (
                    <p className="text-sm text-red-500 text-center -mt-4">{authError}</p>
                )}

                <div className="space-y-4">
                    <div>
                        <Input placeholder="Email" type="email" {...register("email")} />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <Input
                            placeholder="Senha"
                            type="password"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                        style={{
                            backgroundColor: theme?.primaryColor,
                        }}
                    >
                        {isSubmitting ? "Entrando..." : "Entrar"}
                    </Button>
                </div>

                {providers.includes("google") && (
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => signIn("google")}
                    >
                        Entrar com Google
                    </Button>
                )}
            </form>
        </div>
    );
}
