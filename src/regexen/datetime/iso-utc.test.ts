import { describe, expect, it } from 'vitest';
import { invalidIsoUtc, validIsoUtc } from '../../fixtures/datetime/iso-strings.ts';
import { isoUtc } from './iso-utc.ts';

describe('isoUtc', () => {
  it.each(Object.entries(validIsoUtc))('%s: %s', (_, value) => {
    expect(isoUtc.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIsoUtc))('%s: %s', (_, value) => {
    expect(isoUtc.test(value)).toBe(false);
  });
});
