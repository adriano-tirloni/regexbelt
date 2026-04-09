import { describe, expect, it } from 'vitest';
import { invalidNis, validNis } from '../../../../fixtures/countries/br/documents/nis.ts';
import { nis } from './nis.ts';

describe('nis', () => {
  it.each(Object.entries(validNis))('%s: %s', (_, value) => {
    expect(nis.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidNis))('%s: %s', (_, value) => {
    expect(nis.test(value)).toBe(false);
  });
});
