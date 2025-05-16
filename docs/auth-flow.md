# 🔁 Fluxo de autenticação

## Ações disponíveis:

- `signIn` via `next-auth`
- `signOut()`
- Sessão via `useSession()`
- Proteção via `useRequireAuth()`

```tsx
const { isLoading } = useRequireAuth();
```