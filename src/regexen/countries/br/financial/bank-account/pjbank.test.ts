import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountPjbank,
  validBankAccountPjbank,
} from '../../../../../fixtures/countries/br/financial/bank-account/pjbank.ts';
import { bankAccountPjbank } from './pjbank.ts';

describe('bankAccountPjbank', () => {
  it.each(Object.entries(validBankAccountPjbank))('%s: %s', (_, value) => {
    expect(bankAccountPjbank.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountPjbank))('%s: %s', (_, value) => {
    expect(bankAccountPjbank.test(value)).toBe(false);
  });
});
