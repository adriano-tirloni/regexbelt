import { describe, expect, it } from 'vitest';
import { invalidCnes, validCnes } from '../../../../fixtures/countries/br/codes/cnes.ts';
import { cnes } from './cnes.ts';

describe('cnes', () => {
  it.each(Object.entries(validCnes))('%s: %s', (_, value) => {
    expect(cnes.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnes))('%s: %s', (_, value) => {
    expect(cnes.test(value)).toBe(false);
  });
});
