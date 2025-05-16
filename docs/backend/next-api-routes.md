# 🧩 API Routes (Next.js)

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