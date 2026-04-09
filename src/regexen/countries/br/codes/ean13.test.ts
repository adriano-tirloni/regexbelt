import { describe, expect, it } from 'vitest';
import { invalidEan13, validEan13 } from '../../../../fixtures/countries/br/codes/ean13.ts';
import { ean13 } from './ean13.ts';

describe('ean13', () => {
  it.each(Object.entries(validEan13))('%s: %s', (_, value) => {
    expect(ean13.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidEan13))('%s: %s', (_, value) => {
    expect(ean13.test(value)).toBe(false);
  });
});
