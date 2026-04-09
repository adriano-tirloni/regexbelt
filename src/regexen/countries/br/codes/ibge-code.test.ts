import { describe, expect, it } from 'vitest';
import {
  invalidIbgeCode,
  validIbgeCode,
} from '../../../../fixtures/countries/br/codes/ibge-code.ts';
import { ibgeCode } from './ibge-code.ts';

describe('ibgeCode', () => {
  it.each(Object.entries(validIbgeCode))('%s: %s', (_, value) => {
    expect(ibgeCode.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidIbgeCode))('%s: %s', (_, value) => {
    expect(ibgeCode.test(value)).toBe(false);
  });
});
