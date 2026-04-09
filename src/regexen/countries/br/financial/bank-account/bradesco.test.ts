import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountBradesco,
  validBankAccountBradesco,
} from '../../../../../fixtures/countries/br/financial/bank-account/bradesco.ts';
import { bankAccountBradesco } from './bradesco.ts';

describe('bankAccountBradesco', () => {
  it.each(Object.entries(validBankAccountBradesco))('%s: %s', (_, value) => {
    expect(bankAccountBradesco.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountBradesco))('%s: %s', (_, value) => {
    expect(bankAccountBradesco.test(value)).toBe(false);
  });
});
