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

Crie um arquivo `sawabona-auth.config.js` na raiz do projeto para personalizar
as rotas e providers. Um exemplo básico pode ser gerado executando:

```bash
npx sawabona-auth-kit init
# O comando gera `sawabona-auth.config.js` e cria
# um template de API route `[...nextauth].ts` para Next.js.
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

### Apenas botões de login social

```tsx
import { SocialLoginButtons } from "@sawabona/auth-kit";

export default function LoginButtons() {
  return <SocialLoginButtons />;
}
```

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
├── core/
│   ├── auth-provider.tsx
│   ├── config/
│   └── hooks/
├── ui/
│   ├── login-page.tsx
│   ├── register-page.tsx
│   ├── social-login-buttons.tsx
│   ├── login/
│   └── register/
├── lib/
│   └── utils.ts
```

---

## 📖 Documentação adicional

- [📘 Documentação oficial](https://docs.sawabona.tech)
- [📜 CHANGELOG.md](./CHANGELOG.md)
- [📄 LICENSE](./LICENSE)

---

## 🙋‍♂️ Suporte

📧 christopher@sawabonatech.com  
🛠 Criado com 💚 pela [Sawabona Tech](https://sawabona.tech)
