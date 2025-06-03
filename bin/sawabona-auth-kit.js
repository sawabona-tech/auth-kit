#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const [, , command] = process.argv;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

if (command === 'init') {
  const cwd = process.cwd();
  const configPath = path.resolve(cwd, 'sawabona-auth.config.js');

  if (!fs.existsSync(configPath)) {
    const template = `module.exports = {
  baseUrl: "https://api.seuprojeto.com",
  providers: ["credentials"],
};
`;
    fs.writeFileSync(configPath, template);
    console.log('Arquivo sawabona-auth.config.js criado!');
  } else {
    console.log('Arquivo sawabona-auth.config.js já existe.');
  }

  const apiBase = fs.existsSync(path.join(cwd, 'app'))
    ? path.join(cwd, 'app/api/auth')
    : path.join(cwd, 'pages/api/auth');
  ensureDir(apiBase);
  const nextauthPath = path.join(apiBase, '[...nextauth].ts');

  if (!fs.existsSync(nextauthPath)) {
    const nextAuthTemplate = `import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: valide as credenciais no seu backend
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
`;
    fs.writeFileSync(nextauthPath, nextAuthTemplate);
    console.log('Template de API route criado em', nextauthPath);
  } else {
    console.log('API route já existe em', nextauthPath);
  }
} else {
  console.log('Uso: npx sawabona-auth-kit init');
}
