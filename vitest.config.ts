import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      exclude: ["src/server.ts"],
      reporter: ["text", "lcov"],
      // En dessous de ces seuils, la commande échoue (et le pipeline aussi)
      thresholds: {
        lines: 80,
        branches: 80,
      },
    },
  },
});
