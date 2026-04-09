import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountCaixaEconomica,
  validBankAccountCaixaEconomica,
} from '../../../../../fixtures/countries/br/financial/bank-account/caixa-economica.ts';
import { bankAccountCaixaEconomica } from './caixa-economica.ts';

describe('bankAccountCaixaEconomica', () => {
  it.each(Object.entries(validBankAccountCaixaEconomica))('%s: %s', (_, value) => {
    expect(bankAccountCaixaEconomica.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountCaixaEconomica))('%s: %s', (_, value) => {
    expect(bankAccountCaixaEconomica.test(value)).toBe(false);
  });
});
