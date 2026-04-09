import { describe, expect, it } from 'vitest';
import {
  invalidBoletoFormatted,
  invalidBoletoStripped,
  validBoletoFormatted,
  validBoletoStripped,
} from '../../../../fixtures/countries/br/financial/boleto.ts';
import { boletoFormatted, boletoStripped } from './boleto.ts';

describe('boletoFormatted', () => {
  it.each(Object.entries(validBoletoFormatted))('%s: %s', (_, value) => {
    expect(boletoFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBoletoFormatted))('%s: %s', (_, value) => {
    expect(boletoFormatted.test(value)).toBe(false);
  });
});

describe('boletoStripped', () => {
  it.each(Object.entries(validBoletoStripped))('%s: %s', (_, value) => {
    expect(boletoStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBoletoStripped))('%s: %s', (_, value) => {
    expect(boletoStripped.test(value)).toBe(false);
  });
});
