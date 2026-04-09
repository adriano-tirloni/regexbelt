import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountSicredi,
  validBankAccountSicredi,
} from '../../../../../fixtures/countries/br/financial/bank-account/sicredi.ts';
import { bankAccountSicredi } from './sicredi.ts';

describe('bankAccountSicredi', () => {
  it.each(Object.entries(validBankAccountSicredi))('%s: %s', (_, value) => {
    expect(bankAccountSicredi.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountSicredi))('%s: %s', (_, value) => {
    expect(bankAccountSicredi.test(value)).toBe(false);
  });
});
