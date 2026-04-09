import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountSafra,
  validBankAccountSafra,
} from '../../../../../fixtures/countries/br/financial/bank-account/safra.ts';
import { bankAccountSafra } from './safra.ts';

describe('bankAccountSafra', () => {
  it.each(Object.entries(validBankAccountSafra))('%s: %s', (_, value) => {
    expect(bankAccountSafra.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountSafra))('%s: %s', (_, value) => {
    expect(bankAccountSafra.test(value)).toBe(false);
  });
});
