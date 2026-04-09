import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountNext,
  validBankAccountNext,
} from '../../../../../fixtures/countries/br/financial/bank-account/next.ts';
import { bankAccountNext } from './next.ts';

describe('bankAccountNext', () => {
  it.each(Object.entries(validBankAccountNext))('%s: %s', (_, value) => {
    expect(bankAccountNext.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountNext))('%s: %s', (_, value) => {
    expect(bankAccountNext.test(value)).toBe(false);
  });
});
