import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountBanrisul,
  validBankAccountBanrisul,
} from '../../../../../fixtures/countries/br/financial/bank-account/banrisul.ts';
import { bankAccountBanrisul } from './banrisul.ts';

describe('bankAccountBanrisul', () => {
  it.each(Object.entries(validBankAccountBanrisul))('%s: %s', (_, value) => {
    expect(bankAccountBanrisul.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountBanrisul))('%s: %s', (_, value) => {
    expect(bankAccountBanrisul.test(value)).toBe(false);
  });
});
