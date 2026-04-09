import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountNubank,
  validBankAccountNubank,
} from '../../../../../fixtures/countries/br/financial/bank-account/nubank.ts';
import { bankAccountNubank } from './nubank.ts';

describe('bankAccountNubank', () => {
  it.each(Object.entries(validBankAccountNubank))('%s: %s', (_, value) => {
    expect(bankAccountNubank.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountNubank))('%s: %s', (_, value) => {
    expect(bankAccountNubank.test(value)).toBe(false);
  });
});
