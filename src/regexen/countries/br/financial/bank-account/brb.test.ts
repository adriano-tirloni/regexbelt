import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountBrb,
  validBankAccountBrb,
} from '../../../../../fixtures/countries/br/financial/bank-account/brb.ts';
import { bankAccountBrb } from './brb.ts';

describe('bankAccountBrb', () => {
  it.each(Object.entries(validBankAccountBrb))('%s: %s', (_, value) => {
    expect(bankAccountBrb.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountBrb))('%s: %s', (_, value) => {
    expect(bankAccountBrb.test(value)).toBe(false);
  });
});
