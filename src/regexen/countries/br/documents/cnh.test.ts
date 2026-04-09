import { describe, expect, it } from 'vitest';
import { invalidCnh, validCnh } from '../../../../fixtures/countries/br/documents/cnh.ts';
import { cnh } from './cnh.ts';

describe('cnh', () => {
  it.each(Object.entries(validCnh))('%s: %s', (_, value) => {
    expect(cnh.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnh))('%s: %s', (_, value) => {
    expect(cnh.test(value)).toBe(false);
  });
});
