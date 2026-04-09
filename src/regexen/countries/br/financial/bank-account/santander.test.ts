import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountSantander,
  validBankAccountSantander,
} from '../../../../../fixtures/countries/br/financial/bank-account/santander.ts';
import { bankAccountSantander } from './santander.ts';

describe('bankAccountSantander', () => {
  it.each(Object.entries(validBankAccountSantander))('%s: %s', (_, value) => {
    expect(bankAccountSantander.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountSantander))('%s: %s', (_, value) => {
    expect(bankAccountSantander.test(value)).toBe(false);
  });
});
