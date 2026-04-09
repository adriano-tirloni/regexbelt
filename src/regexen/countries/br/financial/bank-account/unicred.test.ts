import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountUnicred,
  validBankAccountUnicred,
} from '../../../../../fixtures/countries/br/financial/bank-account/unicred.ts';
import { bankAccountUnicred } from './unicred.ts';

describe('bankAccountUnicred', () => {
  it.each(Object.entries(validBankAccountUnicred))('%s: %s', (_, value) => {
    expect(bankAccountUnicred.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountUnicred))('%s: %s', (_, value) => {
    expect(bankAccountUnicred.test(value)).toBe(false);
  });
});
