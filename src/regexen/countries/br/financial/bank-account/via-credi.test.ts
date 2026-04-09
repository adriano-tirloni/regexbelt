import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountViaCredi,
  validBankAccountViaCredi,
} from '../../../../../fixtures/countries/br/financial/bank-account/via-credi.ts';
import { bankAccountViaCredi } from './via-credi.ts';

describe('bankAccountViaCredi', () => {
  it.each(Object.entries(validBankAccountViaCredi))('%s: %s', (_, value) => {
    expect(bankAccountViaCredi.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountViaCredi))('%s: %s', (_, value) => {
    expect(bankAccountViaCredi.test(value)).toBe(false);
  });
});
