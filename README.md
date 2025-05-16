# @sawabona/auth-kit

**Autenticação completa para aplicações React e Next.js, com UI integrada, validação forte e extensibilidade máxima.**  
Criado pela [Sawabona Tech](https://sawabona.tech), este pacote oferece telas de login/cadastro, proteção de rotas e integração via NextAuth — tudo com tipagem segura, personalização visual e segurança de ponta.

---

## ✨ Características

- 🔐 Suporte completo a autenticação com [NextAuth.js](https://next-auth.js.org)
- 🎨 UI moderna com TailwindCSS + ShadCN
- 💡 Configuração visual e funcional via `AuthProvider`
- 🔐 Validação forte com Zod (ou personalizada via config)
- 🔁 Registro e login desacoplados do backend (agnóstico)
- 📦 Compatível com App Router e Pages Router
- 🧠 Tipagem forte com TypeScript + Zod
- 🧪 Testes com Vitest + Testing Library

---

## 🚀 Instalação

```bash
pnpm add @sawabona/auth-kit
# ou
npm install @sawabona/auth-kit
```

---

## 🧱 Uso básico

### 🌐 layout.tsx ou _app.tsx

```tsx
import { AuthProvider } from "@sawabona/auth-kit";

<AuthProvider
  config={{
    providers: ["credentials", "google"],
    baseUrl: "https://api.exemplo.com",
    theme: {
      primaryColor: "#716C4A",
      fontFamily: "Yeseva One",
      logoUrl: "/logo.svg",
    },
    redirects: {
      afterLogin: "/dashboard",
      afterLogout: "/",
    }
  }}
>
  {children}
</AuthProvider>
```

---

### 🟢 Login

```tsx
import { LoginPage } from "@sawabona/auth-kit";

export default function Page() {
  return <LoginPage />;
}
```

---

### 🟡 Cadastro

```tsx
import { RegisterPage } from "@sawabona/auth-kit";

export default function Page() {
  return <RegisterPage />;
}
```

---

### 🔐 Proteção de Rotas

```tsx
import { useRequireAuth } from "@sawabona/auth-kit";

export default function Dashboard() {
  const { isLoading } = useRequireAuth();

  if (isLoading) return <p>Carregando...</p>;

  return <div>Área segura</div>;
}
```

---

## ⚙️ Validação customizada (Zod)

```tsx
<AuthProvider
  config={{
    ...
    validation: {
      register: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(10).regex(/[A-Z]/).regex(/[0-9]/),
      }),
      login: z.object({
        email: z.string().email(),
        password: z.string().min(1),
      }),
    }
  }}
>
```

---

## ⚠️ Uso com App Router

Para que `viewport` e `metadata` funcionem no `layout.tsx`:

1. Remova `"use client"` de `layout.tsx`
2. Crie um componente client-only como `AppShell`
3. Envolva nele o `AuthProvider`

---

## 📁 Estrutura

```
src/
├── components/
│   ├── AuthProvider.tsx
│   ├── LoginPage.tsx
│   └── RegisterPage.tsx
├── hooks/
│   └── use-require-auth.ts
├── config/
│   └── default-config.ts
```

---

## 📖 Documentação adicional

- [📜 CHANGELOG.md](./CHANGELOG.md)
- [📄 LICENSE](./LICENSE)

---

## 🙋‍♂️ Suporte e Contato

Criado com ❤️ pela [Sawabona Tech](https://sawabona.tech)  
📧 christopher@sawabonatech.com

---

## 📃 Licença

Este projeto está licenciado sob os termos da [MIT License](./LICENSE).
© 2025 Sawabona Tech