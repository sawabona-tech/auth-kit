# 🚀 Começando

## Instalação

```bash
pnpm add @sawabona/auth-kit
```

## Pré-requisitos

- React 18+
- Next.js 13+ com App Router
- NextAuth configurado
- TailwindCSS com ShadCN UI

## Setup básico

```tsx
import { AuthProvider } from "@sawabona/auth-kit";

<AuthProvider config={{
  baseUrl: "https://api.seuprojeto.com",
  providers: ["credentials"],
}}>
  <App />
</AuthProvider>
```