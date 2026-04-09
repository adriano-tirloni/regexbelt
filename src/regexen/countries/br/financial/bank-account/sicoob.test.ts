import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountSicoob,
  validBankAccountSicoob,
} from '../../../../../fixtures/countries/br/financial/bank-account/sicoob.ts';
import { bankAccountSicoob } from './sicoob.ts';

describe('bankAccountSicoob', () => {
  it.each(Object.entries(validBankAccountSicoob))('%s: %s', (_, value) => {
    expect(bankAccountSicoob.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountSicoob))('%s: %s', (_, value) => {
    expect(bankAccountSicoob.test(value)).toBe(false);
  });
});
