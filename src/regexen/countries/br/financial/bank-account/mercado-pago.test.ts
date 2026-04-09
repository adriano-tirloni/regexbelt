import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountMercadoPago,
  validBankAccountMercadoPago,
} from '../../../../../fixtures/countries/br/financial/bank-account/mercado-pago.ts';
import { bankAccountMercadoPago } from './mercado-pago.ts';

describe('bankAccountMercadoPago', () => {
  it.each(Object.entries(validBankAccountMercadoPago))('%s: %s', (_, value) => {
    expect(bankAccountMercadoPago.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountMercadoPago))('%s: %s', (_, value) => {
    expect(bankAccountMercadoPago.test(value)).toBe(false);
  });
});
