# Changelog

Todos os registros de mudanças seguem o formato do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [0.2.0] - 2025-05-17

### Adicionado

- Suporte completo a `themeTokens` com injeção dinâmica no `<html>` (ex: TweakCN)
- Adição de `ui.variant` para alternar entre múltiplos layouts de Login e Cadastro
- Layouts incluídos: `default`, `split-left`, `split-right`, `minimal`, `background-image`
- Hooks separados e tipados para `useLoginForm` e `useRegisterForm`
- Renderização condicional de email/senha se `credentials` estiver presente
- Botões OAuth renderizados automaticamente com base nos providers
- Estrutura visual totalmente desacoplada e extensível
- Branding visual com `logoUrl` e `companyName`

### Melhorias

- Refatoração do `AuthProvider` com merge de config parcial
- Atualização do README.md com novos exemplos e estrutura clara
- Documentação expandida para desenvolvedores de qualquer nível