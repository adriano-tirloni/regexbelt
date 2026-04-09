import { describe, expect, it } from 'vitest';
import { invalidPixKey, validPixKey } from '../../../../fixtures/countries/br/financial/pix-key.ts';
import { pixKey } from './pix-key.ts';

describe('pixKey', () => {
  it.each(Object.entries(validPixKey))('%s: %s', (_, value) => {
    expect(pixKey.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPixKey))('%s: %s', (_, value) => {
    expect(pixKey.test(value)).toBe(false);
  });
});
