import { describe, expect, it } from 'vitest';
import {
  invalidRgFormatted,
  invalidRgStripped,
  validRgFormatted,
  validRgStripped,
} from '../../../../fixtures/countries/br/documents/rg.ts';
import { rgFormatted, rgStripped } from './rg.ts';

describe('rgFormatted', () => {
  it.each(Object.entries(validRgFormatted))('%s: %s', (_, value) => {
    expect(rgFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidRgFormatted))('%s: %s', (_, value) => {
    expect(rgFormatted.test(value)).toBe(false);
  });
});

describe('rgStripped', () => {
  it.each(Object.entries(validRgStripped))('%s: %s', (_, value) => {
    expect(rgStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidRgStripped))('%s: %s', (_, value) => {
    expect(rgStripped.test(value)).toBe(false);
  });
});
