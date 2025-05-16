import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  target: "es2020",
  format: ["cjs"],
  dts: true, // gera types
  clean: true,
  external: [
    "react",
    "react-dom",
    "next",
    "next-auth",
    "react-hook-form",
    "zod",
    "@hookform/resolvers",
  ],
});
