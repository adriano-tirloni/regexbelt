import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountBancoC6,
  validBankAccountBancoC6,
} from '../../../../../fixtures/countries/br/financial/bank-account/banco-c6.ts';
import { bankAccountBancoC6 } from './banco-c6.ts';

describe('bankAccountBancoC6', () => {
  it.each(Object.entries(validBankAccountBancoC6))('%s: %s', (_, value) => {
    expect(bankAccountBancoC6.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountBancoC6))('%s: %s', (_, value) => {
    expect(bankAccountBancoC6.test(value)).toBe(false);
  });
});
