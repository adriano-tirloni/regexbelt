import { describe, expect, it } from 'vitest';
import { invalidVin, validVin } from '../../../../fixtures/countries/br/vehicles/vin.ts';
import { vin } from './vin.ts';

describe('vin', () => {
  it.each(Object.entries(validVin))('%s: %s', (_, value) => {
    expect(vin.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidVin))('%s: %s', (_, value) => {
    expect(vin.test(value)).toBe(false);
  });
});
