/**
 * AuthProvider é o componente que encapsula toda a aplicação
 * e fornece as configurações de autenticação, tema e redirecionamento.
 */

"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, createContext, useContext } from "react";

import { AuthKitConfig, defaultConfig } from "./config/default-config";
import { loadAuthKitConfig } from "./config/load-config";

import { useThemeTokens } from "@/core/hooks/use-theme-tokens";

type Props = {
    /**
     * Elementos filhos da aplicação (geralmente <App />)
     */
    children: ReactNode;
    /**
     * Configuração personalizada para sobrescrever o default
     */
    config?: AuthKitConfig;
};

const AuthKitContext = createContext<AuthKitConfig>(defaultConfig);

/**
 * Provedor global de autenticação e estilo do AuthKit
 */
export function AuthProvider({ children, config }: Props) {
    const loadedConfig = config ?? loadAuthKitConfig();
    useThemeTokens(loadedConfig.themeTokens);

    const mergedConfig: AuthKitConfig = {
        ...defaultConfig,
        ...loadedConfig,
        theme: {
            ...defaultConfig.theme,
            ...loadedConfig.theme,
        },
        redirects: {
            ...defaultConfig.redirects,
            ...loadedConfig.redirects,
        },
    };

    return (
        <AuthKitContext.Provider value={mergedConfig}>
            <SessionProvider>{children}</SessionProvider>
        </AuthKitContext.Provider>
    );
}

/**
 * Hook para acessar a configuração atual do AuthKit
 */
/**
 * Hook reactivo do pacote @sawabona/auth-kit
 */
export function useAuthKitConfig() {
    return useContext(AuthKitContext);
}