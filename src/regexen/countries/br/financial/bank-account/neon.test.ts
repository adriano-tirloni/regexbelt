import { describe, expect, it } from 'vitest';
import {
  invalidBankAccountNeon,
  validBankAccountNeon,
} from '../../../../../fixtures/countries/br/financial/bank-account/neon.ts';
import { bankAccountNeon } from './neon.ts';

describe('bankAccountNeon', () => {
  it.each(Object.entries(validBankAccountNeon))('%s: %s', (_, value) => {
    expect(bankAccountNeon.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidBankAccountNeon))('%s: %s', (_, value) => {
    expect(bankAccountNeon.test(value)).toBe(false);
  });
});
