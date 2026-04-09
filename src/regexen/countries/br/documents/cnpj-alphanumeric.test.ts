import { describe, expect, it } from 'vitest';
import {
  invalidCnpjAlphanumericFormatted,
  invalidCnpjAlphanumericStripped,
  validCnpjAlphanumericFormatted,
  validCnpjAlphanumericStripped,
} from '../../../../fixtures/countries/br/documents/cnpj-alphanumeric.ts';
import { cnpjAlphanumericFormatted, cnpjAlphanumericStripped } from './cnpj-alphanumeric.ts';

describe('cnpjAlphanumericFormatted', () => {
  it.each(Object.entries(validCnpjAlphanumericFormatted))('%s: %s', (_, value) => {
    expect(cnpjAlphanumericFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnpjAlphanumericFormatted))('%s: %s', (_, value) => {
    expect(cnpjAlphanumericFormatted.test(value)).toBe(false);
  });
});

describe('cnpjAlphanumericStripped', () => {
  it.each(Object.entries(validCnpjAlphanumericStripped))('%s: %s', (_, value) => {
    expect(cnpjAlphanumericStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnpjAlphanumericStripped))('%s: %s', (_, value) => {
    expect(cnpjAlphanumericStripped.test(value)).toBe(false);
  });
});
