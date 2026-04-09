import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountCora,
  validBankAccountCora,
} from '../../../../../fixtures/countries/br/financial/bank-account/cora.ts';
import { bankAccountCora } from './cora.ts';

describe('bankAccountCora', () => {
  it.each(Object.entries(validBankAccountCora))('%s: %s', (_, value) => {
    expect(bankAccountCora.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountCora))('%s: %s', (_, value) => {
    expect(bankAccountCora.test(value)).toBe(false);
  });
});
