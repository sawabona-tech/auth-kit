# 🛡️ Validações com Zod

## Validação padrão (senha forte)

- Mínimo de 8 caracteres
- Letra maiúscula
- Letra minúscula
- Número
- Caractere especial

```ts
z.string()
 .min(8)
 .regex(/[A-Z]/)
 .regex(/[a-z]/)
 .regex(/[0-9]/)
 .regex(/[^A-Za-z0-9]/)
```

## Personalizando o schema

```tsx
<AuthProvider config={{
  validation: {
    register: z.object({
      email: z.string().email(),
      password: z.string().min(10),
    })
  }
}}>
```