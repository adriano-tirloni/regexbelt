import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountPagseguro,
  validBankAccountPagseguro,
} from '../../../../../fixtures/countries/br/financial/bank-account/pagseguro.ts';
import { bankAccountPagseguro } from './pagseguro.ts';

describe('bankAccountPagseguro', () => {
  it.each(Object.entries(validBankAccountPagseguro))('%s: %s', (_, value) => {
    expect(bankAccountPagseguro.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountPagseguro))('%s: %s', (_, value) => {
    expect(bankAccountPagseguro.test(value)).toBe(false);
  });
});
