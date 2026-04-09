import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountCaixaEconomicaNew,
  validBankAccountCaixaEconomicaNew,
} from '../../../../../fixtures/countries/br/financial/bank-account/caixa-economica-new.ts';
import { bankAccountCaixaEconomicaNew } from './caixa-economica-new.ts';

describe('bankAccountCaixaEconomicaNew', () => {
  it.each(Object.entries(validBankAccountCaixaEconomicaNew))('%s: %s', (_, value) => {
    expect(bankAccountCaixaEconomicaNew.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountCaixaEconomicaNew))('%s: %s', (_, value) => {
    expect(bankAccountCaixaEconomicaNew.test(value)).toBe(false);
  });
});
