import { describe, expect, it } from 'vitest';
import {
  invalidDecimal,
  invalidNegativeDecimal,
  invalidPositiveDecimal,
  validDecimal,
  validNegativeDecimal,
  validPositiveDecimal,
} from '../../fixtures/math/decimal.ts';
import { decimal, negativeDecimal, positiveDecimal } from './decimal.ts';

describe('positiveDecimal', () => {
  it.each(Object.entries(validPositiveDecimal))('%s: %s', (_, value) => {
    expect(positiveDecimal.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPositiveDecimal))('%s: %s', (_, value) => {
    expect(positiveDecimal.test(value)).toBe(false);
  });
});

describe('negativeDecimal', () => {
  it.each(Object.entries(validNegativeDecimal))('%s: %s', (_, value) => {
    expect(negativeDecimal.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidNegativeDecimal))('%s: %s', (_, value) => {
    expect(negativeDecimal.test(value)).toBe(false);
  });
});

describe('decimal', () => {
  it.each(Object.entries(validDecimal))('%s: %s', (_, value) => {
    expect(decimal.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidDecimal))('%s: %s', (_, value) => {
    expect(decimal.test(value)).toBe(false);
  });
});
