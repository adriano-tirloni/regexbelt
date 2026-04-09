import { describe, expect, it } from 'vitest';
import {
  invalidRenavamFormatted,
  invalidRenavamStripped,
  validRenavamFormatted,
  validRenavamStripped,
} from '../../../../fixtures/countries/br/vehicles/renavam.ts';
import { renavamFormatted, renavamStripped } from './renavam.ts';

describe('renavamFormatted', () => {
  it.each(Object.entries(validRenavamFormatted))('%s: %s', (_, value) => {
    expect(renavamFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidRenavamFormatted))('%s: %s', (_, value) => {
    expect(renavamFormatted.test(value)).toBe(false);
  });
});

describe('renavamStripped', () => {
  it.each(Object.entries(validRenavamStripped))('%s: %s', (_, value) => {
    expect(renavamStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidRenavamStripped))('%s: %s', (_, value) => {
    expect(renavamStripped.test(value)).toBe(false);
  });
});
