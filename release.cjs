const { execSync } = require("child_process");

function step(msg) {
  console.log(`\x1b[36m› ${msg}\x1b[0m`);
}

try {
  step("🔧 Executando build com tsup...");
  execSync("pnpm build", { stdio: "inherit" });

  step("🔢 Incrementando versão (patch)...");
  execSync("npm version minor", { stdio: "inherit" });

  step("📦 Publicando no NPM...");
  execSync("npm publish --access public", { stdio: "inherit" });

  step("✅ Release publicado com sucesso!");
} catch (error) {
  console.error("\x1b[31m❌ Erro durante o release:\x1b[0m", error);
  process.exit(1);
}

