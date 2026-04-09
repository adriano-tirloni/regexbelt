import { describe, expect, it } from 'vitest';
import {
  invalidPisPasepFormatted,
  invalidPisPasepStripped,
  validPisPasepFormatted,
  validPisPasepStripped,
} from '../../../../fixtures/countries/br/documents/pis-pasep.ts';
import { pisPasepFormatted, pisPasepStripped } from './pis-pasep.ts';

describe('pisPasepFormatted', () => {
  it.each(Object.entries(validPisPasepFormatted))('%s: %s', (_, value) => {
    expect(pisPasepFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPisPasepFormatted))('%s: %s', (_, value) => {
    expect(pisPasepFormatted.test(value)).toBe(false);
  });
});

describe('pisPasepStripped', () => {
  it.each(Object.entries(validPisPasepStripped))('%s: %s', (_, value) => {
    expect(pisPasepStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPisPasepStripped))('%s: %s', (_, value) => {
    expect(pisPasepStripped.test(value)).toBe(false);
  });
});
