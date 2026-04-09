import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountStone,
  validBankAccountStone,
} from '../../../../../fixtures/countries/br/financial/bank-account/stone.ts';
import { bankAccountStone } from './stone.ts';

describe('bankAccountStone', () => {
  it.each(Object.entries(validBankAccountStone))('%s: %s', (_, value) => {
    expect(bankAccountStone.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountStone))('%s: %s', (_, value) => {
    expect(bankAccountStone.test(value)).toBe(false);
  });
});
