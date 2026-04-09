import { describe, expect, it } from 'vitest';
import {
  invalidLicensePlate,
  validLicensePlate,
} from '../../../../fixtures/countries/br/vehicles/license-plate.ts';
import { licensePlate } from './license-plate.ts';

describe('licensePlate', () => {
  it.each(Object.entries(validLicensePlate))('%s: %s', (_, value) => {
    expect(licensePlate.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidLicensePlate))('%s: %s', (_, value) => {
    expect(licensePlate.test(value)).toBe(false);
  });
});
