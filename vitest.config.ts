import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(import.meta.dirname, 'src'),
    },
  },
  test: {
    include: ['**/*.test.ts'],
    coverage: {
      include: ['src/regexen/**/*.ts'],
      exclude: ['**/*.test.ts', '**/_index.ts'],
      thresholds: { 100: true },
    },
  },
});
