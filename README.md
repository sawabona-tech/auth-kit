# 🐘 @sawabona/auth-kit

**Pacote de autenticação completo para aplicações React e Next.js**, criado pela [Sawabona Tech](https://sawabona.tech).

Permite autenticação via **email/senha ou qualquer provider do NextAuth**, com layout customizável, tema visual via TweakCN, e integração desacoplada com qualquer backend.

---

## ✨ Destaques

- 🔐 Login e Cadastro desacoplados com suporte a qualquer provider
- 🎨 Variações de layout (`default`, `split-left`, `minimal`, etc.)
- 💅 Personalização de tema via `themeTokens` (TweakCN)
- ✅ Tipagem segura com `zod` + React Hook Form
- 🔁 Fluxo completo com `signIn`, `signOut`, `useSession`, proteção de rotas
- 🧱 Estrutura escalável com hooks reutilizáveis
- 🧪 Testes automatizados com Vitest

---

## 🚀 Instalação

```bash
pnpm add @sawabona/auth-kit
```

---

## 🧱 Exemplo completo de uso

```tsx
import { AuthProvider } from "@sawabona/auth-kit";

<AuthProvider
  config={{
    baseUrl: "https://api.suaapi.com",
    providers: ["credentials", "google"],
    redirects: {
      afterLogin: "/dashboard",
      afterLogout: "/",
    },
    validation: {
      register: z.object({
        email: z.string().email(),
        password: z.string().min(8),
      }),
    },
    themeTokens: {
      "--primary": "#716C4A",
      "--font-sans": "Yeseva One, serif",
    },
    ui: {
      variant: "split-left",
    },
    branding: {
      logoUrl: "/logo.svg",
      companyName: "Sawabona Tech",
    },
  }}
>
  <App />
</AuthProvider>
```

---

## 📲 Login adaptativo

```tsx
import { LoginPage } from "@sawabona/auth-kit";

export default function Login() {
  return <LoginPage />;
}
```

- Campos de email/senha só aparecem se `"credentials"` estiver incluído
- Botões OAuth são gerados automaticamente com base nos `providers`

---

## 🟡 Cadastro adaptativo

```tsx
import { RegisterPage } from "@sawabona/auth-kit";

export default function Register() {
  return <RegisterPage />;
}
```

---

## 🧩 Proteção de rotas

```tsx
const { isLoading } = useRequireAuth();
```

---

## 🎨 Personalização visual com TweakCN

Cole o tema exportado direto do [tweakcn.com](https://tweakcn.com):

```ts
themeTokens: {
  "--background": "#EFE9DB",
  "--foreground": "#121212",
  "--primary": "#716C4A",
  "--radius": "0.5rem"
}
```

---

## 📁 Estrutura recomendada

```
src/
├── components/
│   ├── AuthProvider.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   └── variants/
├── hooks/
│   ├── use-login-form.ts
│   ├── use-register-form.ts
│   ├── use-theme-tokens.ts
│   └── use-require-auth.ts
├── config/
│   └── default-config.ts
```

---

## 📖 Documentação adicional

- [📘 Documentação oficial](https://docs.sawabonatech.com)
- [📜 CHANGELOG.md](./CHANGELOG.md)
- [📄 LICENSE](./LICENSE)

---

## 🙋‍♂️ Suporte

📧 christopher@sawabonatech.com  
🛠 Criado com 💚 pela [Sawabona Tech](https://sawabona.tech)