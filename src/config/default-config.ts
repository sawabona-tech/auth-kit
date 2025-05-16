import { z } from "zod";

/**
 * Configuração principal do AuthKit
 */
export interface AuthKitConfig {
  /**
   * URL base da API onde serão feitas as chamadas de login/cadastro
   * Exemplo: https://api.sistema.com
   */
  baseUrl: string;

  /**
   * Lista de providers compatíveis com NextAuth
   * Exemplo: ["credentials", "google", "github"]
   */
  providers: string[];

  /**
   * Caminhos de redirecionamento após login/logout
   */
  redirects?: {
    /**
     * Redireciona para esta rota após login com sucesso
     */
    afterLogin?: string;
    /**
     * Redireciona para esta rota após logout
     */
    afterLogout?: string;
  };

  /**
   * Schemas de validação personalizados via Zod
   */
  validation?: {
    /**
     * Schema de validação para o formulário de login
     */
    login?: z.ZodSchema;
    /**
     * Schema de validação para o formulário de cadastro
     */
    register?: z.ZodSchema;
  };

  /**
   * Tokens visuais CSS customizados (baseados no TweakCN ou ShadCN)
   */
  themeTokens?: Record<string, string>;

  /**
   * Configurações visuais de marca
   */
  branding?: {
    /**
     * Caminho ou URL do logo exibido nas telas
     */
    logoUrl?: string;
    /**
     * Nome da empresa exibido no rodapé ou cabeçalho
     */
    companyName?: string;
  };

  /**
   * Variação do layout das telas de Login/Register
   */
  ui?: {
    /**
     * Variante do layout que será usada
     */
    variant?:
      | "default"
      | "split-left"
      | "split-right"
      | "background-image"
      | "minimal";
  };

  /**
   * Campos adicionais definidos pelo consumidor do pacote
   */
  [key: string]: any;
}

export const defaultConfig: AuthKitConfig = {
  baseUrl: "",
  providers: ["credentials"],
  redirects: {
    afterLogin: "/dashboard",
    afterLogout: "/",
  },
  ui: {
    variant: "split-left",
  },
  themeTokens: {
    "--primary": "#716C4A",
    "--font-sans": "Yeseva One, serif",
  },
  branding: {
    logoUrl: "/logo.svg",
    companyName: "Sawabona Tech",
  },
};

