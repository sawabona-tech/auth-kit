"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthKitConfig } from "./auth-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const defaultRegisterSchema = z.object({
    name: z.string().min(2, "Nome obrigatório"),
    email: z.string().email("Email inválido"),
    password: z
        .string()
        .min(8, "Mínimo 8 caracteres")
        .regex(/[A-Z]/, "1 letra maiúscula")
        .regex(/[a-z]/, "1 letra minúscula")
        .regex(/[0-9]/, "1 número")
        .regex(/[^A-Za-z0-9]/, "1 caractere especial"),
});

export function RegisterPage() {
    const { baseUrl, theme, redirects, validation } = useAuthKitConfig();
    const router = useRouter();

    const schema = validation?.register ?? defaultRegisterSchema;
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: z.infer<typeof schema>) => {
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
                        {errors.name && <p className="text-sm text-red-500">{String(errors.name?.message || "")}</p>}
                    </div>
                    <div>
                        <Input placeholder="Email" type="email" {...register("email")} />
                        {errors.email && <p className="text-sm text-red-500">{String(errors.email?.message || "")}</p>}
                    </div>
                    <div>
                        <Input placeholder="Senha" type="password" {...register("password")} />
                        {errors.password && <p className="text-sm text-red-500">{String(errors.password?.message || "")}</p>}
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                        style={{ backgroundColor: theme?.primaryColor }}
                    >
                        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                    </Button>
                </div>
            </form>
        </div>
    );
}