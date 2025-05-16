# Changelog

Todos os registros de mudanças seguem o formato do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [0.1.4] - 2025-05-16

### Adicionado

- Suporte a schemas Zod customizados para login e cadastro via `config.validation`
- Tipagem automática com `z.infer<typeof schema>` em `onSubmit`
- Documentação de uso com exemplos no README
- Estrutura de mensagens de erro seguras (`String(errors?.field?.message || "")`)
- Sanitização básica com `.trim()` nos inputs por padrão

### Corrigido

- Erros de tipagem relacionados ao uso de mensagens de erro do React Hook Form
- Compatibilidade com ReactNode nos componentes de erro

### Melhorias

- Validações padrão mais seguras para senha (mín. 8, letras, número, símbolo)
- Design extensível e agnóstico ao backend para regras de segurança
