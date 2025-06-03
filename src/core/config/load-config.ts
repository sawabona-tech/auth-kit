import { existsSync } from "fs";
import path from "path";
import { AuthKitConfig, defaultConfig } from "./default-config";

/**
 * Carrega o arquivo `sawabona-auth.config.js` da raiz da aplicação
 * mesclando com a configuração padrão.
 */
export function loadAuthKitConfig(): AuthKitConfig {
  const configPath = path.resolve(process.cwd(), "sawabona-auth.config.js");
  if (existsSync(configPath)) {
    const userConfig = require(configPath) as Partial<AuthKitConfig>;
    return {
      ...defaultConfig,
      ...userConfig,
      theme: {
        ...defaultConfig.theme,
        ...(userConfig as any).theme,
      },
      redirects: {
        ...defaultConfig.redirects,
        ...(userConfig.redirects || {}),
      },
    } as AuthKitConfig;
  }
  return defaultConfig;
}
