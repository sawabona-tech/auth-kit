# 🧪 Testes

Use `Vitest` com `@testing-library/react`.

```ts
import { render, screen } from "@testing-library/react";
import { LoginPage } from "@/components/LoginPage";

test("renderiza input de email", () => {
  render(<LoginPage />);
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
});
```