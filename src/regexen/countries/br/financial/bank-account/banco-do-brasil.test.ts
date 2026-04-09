import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountBancoDoBrasil,
  validBankAccountBancoDoBrasil,
} from '../../../../../fixtures/countries/br/financial/bank-account/banco-do-brasil.ts';
import { bankAccountBancoDoBrasil } from './banco-do-brasil.ts';

describe('bankAccountBancoDoBrasil', () => {
  it.each(Object.entries(validBankAccountBancoDoBrasil))('%s: %s', (_, value) => {
    expect(bankAccountBancoDoBrasil.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountBancoDoBrasil))('%s: %s', (_, value) => {
    expect(bankAccountBancoDoBrasil.test(value)).toBe(false);
  });
});
