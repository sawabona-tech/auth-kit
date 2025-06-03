# 🧩 API Routes (Next.js)

O comando `npx sawabona-auth-kit init` já cria um template
`[...nextauth].ts` para facilitar a configuração do NextAuth.

## Exemplo: Registro

```ts
export default async function handler(req, res) {
  const { name, email, password } = req.body;

  // 1. Validar input
  // 2. Hash da senha
  // 3. Salvar no banco
  // 4. Retornar sucesso
}
```