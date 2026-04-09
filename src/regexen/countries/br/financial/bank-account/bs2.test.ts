import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountBs2,
  validBankAccountBs2,
} from '../../../../../fixtures/countries/br/financial/bank-account/bs2.ts';
import { bankAccountBs2 } from './bs2.ts';

describe('bankAccountBs2', () => {
  it.each(Object.entries(validBankAccountBs2))('%s: %s', (_, value) => {
    expect(bankAccountBs2.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountBs2))('%s: %s', (_, value) => {
    expect(bankAccountBs2.test(value)).toBe(false);
  });
});
