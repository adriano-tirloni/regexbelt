import { describe, expect, it } from 'vitest';
import { invalidNfeKey, validNfeKey } from '../../../../fixtures/countries/br/codes/nfe-key.ts';
import { nfeKey } from './nfe-key.ts';

describe('nfeKey', () => {
  it.each(Object.entries(validNfeKey))('%s: %s', (_, value) => {
    expect(nfeKey.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidNfeKey))('%s: %s', (_, value) => {
    expect(nfeKey.test(value)).toBe(false);
  });
});
