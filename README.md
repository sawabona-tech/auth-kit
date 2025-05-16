# @sawabona/auth-kit

Pacote de autenticação reutilizável, com UI integrada e suporte a múltiplos providers via [NextAuth.js](https://next-auth.js.org). Criado pela [Sawabona Tech](https://sawabona.tech) para acelerar a implementação de login, registro e proteção de rotas em projetos React e Next.js.

## ✨ Características

- 🔐 Suporte completo a autenticação com NextAuth
- 🎨 UI moderna com TailwindCSS + ShadCN
- 🎯 Totalmente configurável (temas, rotas, providers)
- ♻️ Reutilizável em múltiplos projetos
- 📦 Compatível com App Router ou Pages Router

---

## 🚀 Instalação

```bash
npm install @sawabona/auth-kit
# ou
pnpm add @sawabona/auth-kit
```

> Você também precisa configurar o NextAuth no seu projeto. Veja: https://next-auth.js.org/getting-started/introduction

---

## 🧱 Estrutura mínima esperada

```tsx
// app/layout.tsx ou _app.tsx
import { AuthProvider } from "@sawabona/auth-kit";

<AuthProvider
  config={{
    providers: ["credentials", "google"],
    baseUrl: "https://api.seuprojeto.com",
    theme: {
      primaryColor: "#716C4A",
      fontFamily: "Yeseva One",
      logoUrl: "/logo.svg",
    },
    redirects: {
      afterLogin: "/dashboard",
      afterLogout: "/",
    },
  }}
>
  {children}
</AuthProvider>;
```

---

## 📥 Telas prontas para uso

### 🟢 Login

```tsx
// app/login/page.tsx
import { LoginPage } from "@sawabona/auth-kit";

export default function Page() {
  return <LoginPage />;
}
```

### 🟡 Registro

```tsx
// app/register/page.tsx
import { RegisterPage } from "@sawabona/auth-kit";

export default function Page() {
  return <RegisterPage />;
}
```

---

## 🛡️ Proteção de páginas privadas

### 🔒 Com `useRequireAuth` (App Router ou Pages)

```tsx
import { useRequireAuth } from "@sawabona/auth-kit";

export default function Dashboard() {
  const { isLoading } = useRequireAuth();

  if (isLoading) return <p>Carregando...</p>;

  return <div>Área autenticada!</div>;
}
```

---

## 🎨 Customização visual

O tema pode ser passado diretamente no `AuthProvider`:

```ts
theme: {
  primaryColor: "#716C4A",
  fontFamily: "Yeseva One",
  logoUrl: "/logo.svg"
}
```

Todos os componentes usam Tailwind + ShadCN. É possível sobrescrever estilos via CSS ou usar `tailwind-variants` para extendê-los.

---

## 🌐 Backend de registro

A tela de cadastro (`RegisterPage`) faz `POST` para:

```
POST {baseUrl}/auth/register
Content-Type: application/json
{
  "name": "Nome",
  "email": "email@exemplo.com",
  "password": "segura123"
}
```

Esse endpoint deve ser implementado no seu backend com Supabase, Prisma ou outro stack que preferir.

---

## 🛠️ Tipagem

```ts
export interface AuthKitConfig {
  providers: ("google" | "github" | "credentials")[];
  baseUrl: string;
  theme?: {
    primaryColor?: string;
    fontFamily?: string;
    logoUrl?: string;
  };
  redirects?: {
    afterLogin?: string;
    afterLogout?: string;
  };
}
```

---

## ⚠️ Uso com App Router (Next.js 13+)

Se você estiver usando `app/layout.tsx` com exportações como `viewport` ou `metadata`, **não marque o layout inteiro como `"use client"`**.

### ✅ Como fazer corretamente:

1. **Não use `"use client"` no `layout.tsx`**
2. Envolva o `<AuthProvider>` dentro de um Client Component separado, por exemplo:

```tsx
// app/components/AppShell.tsx
"use client";

import { AuthProvider } from "@sawabona/auth-kit";
import { Analytics } from "@vercel/analytics/react";

export function AppShell({ children }) {
  return (
    <AuthProvider
      config={
        {
          /* sua config */
        }
      }
    >
      {children}
      <Analytics />
    </AuthProvider>
  );
}
```

3. Use no `layout.tsx`:

```tsx
import { AppShell } from "@/components/AppShell";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
```

> ✅ Isso garante que `viewport` e `metadata` sejam avaliados no servidor corretamente, e que a UI de autenticação funcione 100% no cliente.

---

## 🧪 Requisitos

- Next.js 13+
- React 18+
- TailwindCSS configurado no projeto que consome o pacote
- next-auth configurado no projeto base

---

## 👨‍💻 Sobre a Sawabona Tech

A Sawabona é uma software house brasileira especializada em soluções digitais personalizadas. Criamos ferramentas intuitivas, seguras e eficientes para empresas modernas.

- 🌐 [sawabona.tech](https://sawabona.tech)
- 📧 contato@sawabona.tech

---

## 📃 Licença

MIT License © 2025 [Sawabona Tech](https://sawabona.tech)
