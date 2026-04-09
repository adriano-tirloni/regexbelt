import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountInter,
  validBankAccountInter,
} from '../../../../../fixtures/countries/br/financial/bank-account/inter.ts';
import { bankAccountInter } from './inter.ts';

describe('bankAccountInter', () => {
  it.each(Object.entries(validBankAccountInter))('%s: %s', (_, value) => {
    expect(bankAccountInter.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountInter))('%s: %s', (_, value) => {
    expect(bankAccountInter.test(value)).toBe(false);
  });
});
