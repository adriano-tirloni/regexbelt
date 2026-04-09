import { describe, expect, it } from 'vitest';
import {
  invalidSuframa,
  validSuframa,
} from '../../../../fixtures/countries/br/government/suframa.ts';
import { suframa } from './suframa.ts';

describe('suframa', () => {
  it.each(Object.entries(validSuframa))('%s: %s', (_, value) => {
    expect(suframa.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidSuframa))('%s: %s', (_, value) => {
    expect(suframa.test(value)).toBe(false);
  });
});
