"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, createContext, useContext } from "react";
import { AuthKitConfig, defaultConfig } from "../config/default-config";

type Props = {
    children: ReactNode;
    config?: Partial<AuthKitConfig>;
};

const AuthKitContext = createContext<AuthKitConfig>(defaultConfig);

export function AuthProvider({ children, config }: Props) {
    const mergedConfig: AuthKitConfig = {
        ...defaultConfig,
        ...config,
        theme: {
            ...defaultConfig.theme,
            ...config?.theme,
        },
        redirects: {
            ...defaultConfig.redirects,
            ...config?.redirects,
        },
    };

    return (
        <AuthKitContext.Provider value={mergedConfig}>
            <SessionProvider>{children}</SessionProvider>
        </AuthKitContext.Provider>
    );
}

export function useAuthKitConfig() {
    return useContext(AuthKitContext);
}
