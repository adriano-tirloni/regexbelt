import { describe, expect, it } from 'vitest';
import { invalidCaged, validCaged } from '../../../../fixtures/countries/br/government/caged.ts';
import { caged } from './caged.ts';

describe('caged', () => {
  it.each(Object.entries(validCaged))('%s: %s', (_, value) => {
    expect(caged.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCaged))('%s: %s', (_, value) => {
    expect(caged.test(value)).toBe(false);
  });
});
