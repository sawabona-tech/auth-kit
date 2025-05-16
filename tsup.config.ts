import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  target: "es2020",
  format: ["esm", "cjs"],
  dts: true, // gera types
  clean: true,
  external: ["react", "react-dom", "next-auth", "next"],
});
