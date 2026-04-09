import { describe, expect, it } from 'vitest';
import {
  invalidAddressNumber,
  validAddressNumber,
} from '../../../../fixtures/countries/br/contact/address-number.ts';
import { addressNumber } from './address-number.ts';

describe('addressNumber', () => {
  it.each(Object.entries(validAddressNumber))('%s: %s', (_, value) => {
    expect(addressNumber.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidAddressNumber))('%s: %s', (_, value) => {
    expect(addressNumber.test(value)).toBe(false);
  });
});
