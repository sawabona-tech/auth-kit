/**
 * Configuração exemplo do AuthKit
 * Copie este arquivo e ajuste os valores conforme sua aplicação.
 */

/** @type {import('./dist').AuthKitConfig} */
const config = {
  baseUrl: "https://api.seuprojeto.com",
  providers: ["credentials", "google"],
  redirects: {
    afterLogin: "/dashboard",
    afterLogout: "/",
  },
};

module.exports = config;
