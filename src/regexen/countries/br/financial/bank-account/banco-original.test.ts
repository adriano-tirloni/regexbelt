import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountBancoOriginal,
  validBankAccountBancoOriginal,
} from '../../../../../fixtures/countries/br/financial/bank-account/banco-original.ts';
import { bankAccountBancoOriginal } from './banco-original.ts';

describe('bankAccountBancoOriginal', () => {
  it.each(Object.entries(validBankAccountBancoOriginal))('%s: %s', (_, value) => {
    expect(bankAccountBancoOriginal.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountBancoOriginal))('%s: %s', (_, value) => {
    expect(bankAccountBancoOriginal.test(value)).toBe(false);
  });
});
