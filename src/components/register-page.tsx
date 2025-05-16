"use client";


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthKitConfig } from "./auth-provider";
import { useForm } from "react-hook-form";

const schema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function RegisterPage() {
    const { baseUrl, theme, redirects } = useAuthKitConfig();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        const res = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            router.push(redirects?.afterLogin || "/dashboard");
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
                        Criar Conta
                    </h1>
                    <p className="text-muted-foreground">Cadastre-se para começar</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <Input placeholder="Nome" {...register("name")} />
                        {errors.name && (
                            <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>
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
                        {isSubmitting ? "Enviando..." : "Cadastrar"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
