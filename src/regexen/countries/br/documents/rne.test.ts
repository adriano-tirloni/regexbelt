import { describe, expect, it } from 'vitest';
import { invalidRne, validRne } from '../../../../fixtures/countries/br/documents/rne.ts';
import { rne } from './rne.ts';

describe('rne', () => {
  it.each(Object.entries(validRne))('%s: %s', (_, value) => {
    expect(rne.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidRne))('%s: %s', (_, value) => {
    expect(rne.test(value)).toBe(false);
  });
});
