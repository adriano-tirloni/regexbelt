import { describe, expect, it } from 'vitest';
import { invalidCaepf, validCaepf } from '../../../../fixtures/countries/br/government/caepf.ts';
import { caepf } from './caepf.ts';

describe('caepf', () => {
  it.each(Object.entries(validCaepf))('%s: %s', (_, value) => {
    expect(caepf.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCaepf))('%s: %s', (_, value) => {
    expect(caepf.test(value)).toBe(false);
  });
});
