import { describe, expect, it } from 'vitest';
import { invalidCns, validCns } from '../../../../fixtures/countries/br/documents/cns.ts';
import { cns } from './cns.ts';

describe('cns', () => {
  it.each(Object.entries(validCns))('%s: %s', (_, value) => {
    expect(cns.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCns))('%s: %s', (_, value) => {
    expect(cns.test(value)).toBe(false);
  });
});
