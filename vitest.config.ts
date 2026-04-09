import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    coverage: {
      include: ['src/regexen/**/*.ts'],
      exclude: ['**/*.test.ts', '**/index.ts'],
      thresholds: { 100: true },
    },
  },
});
