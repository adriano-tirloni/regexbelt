import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountItau,
  validBankAccountItau,
} from '../../../../../fixtures/countries/br/financial/bank-account/itau.ts';
import { bankAccountItau } from './itau.ts';

describe('bankAccountItau', () => {
  it.each(Object.entries(validBankAccountItau))('%s: %s', (_, value) => {
    expect(bankAccountItau.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountItau))('%s: %s', (_, value) => {
    expect(bankAccountItau.test(value)).toBe(false);
  });
});
