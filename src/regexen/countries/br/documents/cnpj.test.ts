import { describe, expect, it } from 'vitest';
import {
  invalidCnpjFormatted,
  invalidCnpjStripped,
  validCnpjFormatted,
  validCnpjStripped,
} from '../../../../fixtures/countries/br/documents/cnpj.ts';
import { cnpjFormatted, cnpjStripped } from './cnpj.ts';

describe('cnpjFormatted', () => {
  it.each(Object.entries(validCnpjFormatted))('%s: %s', (_, value) => {
    expect(cnpjFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnpjFormatted))('%s: %s', (_, value) => {
    expect(cnpjFormatted.test(value)).toBe(false);
  });
});

describe('cnpjStripped', () => {
  it.each(Object.entries(validCnpjStripped))('%s: %s', (_, value) => {
    expect(cnpjStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnpjStripped))('%s: %s', (_, value) => {
    expect(cnpjStripped.test(value)).toBe(false);
  });
});
