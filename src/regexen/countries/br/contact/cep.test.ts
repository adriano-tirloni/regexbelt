import { describe, expect, it } from 'vitest';
import {
  invalidCepFormatted,
  invalidCepStripped,
  validCepFormatted,
  validCepStripped,
} from '../../../../fixtures/countries/br/contact/cep.ts';
import { cepFormatted, cepStripped } from './cep.ts';

describe('cepFormatted', () => {
  it.each(Object.entries(validCepFormatted))('%s: %s', (_, value) => {
    expect(cepFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCepFormatted))('%s: %s', (_, value) => {
    expect(cepFormatted.test(value)).toBe(false);
  });
});

describe('cepStripped', () => {
  it.each(Object.entries(validCepStripped))('%s: %s', (_, value) => {
    expect(cepStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCepStripped))('%s: %s', (_, value) => {
    expect(cepStripped.test(value)).toBe(false);
  });
});
