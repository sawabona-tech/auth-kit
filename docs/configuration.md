# ⚙️ Configuração do AuthProvider

```tsx
<AuthProvider
  config={{
    baseUrl: "https://api.meusistema.com",
    providers: ["credentials", "google"],
    theme: {
      primaryColor: "#716C4A",
      fontFamily: "Yeseva One",
      logoUrl: "/logo.svg"
    },
    redirects: {
      afterLogin: "/dashboard",
      afterLogout: "/",
    },
    validation: {
      register: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(8)
      }),
      login: z.object({
        email: z.string().email(),
        password: z.string()
      })
    }
  }}
>
```