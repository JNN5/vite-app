import { defineConfig, UserConfigExport } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test-setup/setup.ts",
    exclude: [...configDefaults.exclude, "*/e2e/*", "e2e/*"],
  },
} as UserConfigExport);
