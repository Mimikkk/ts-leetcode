/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.test.ts"],
    alias: { "@shared": "src/shared" },
  },
  resolve: {
    alias: { "@shared": "src/shared" },
  },
});
