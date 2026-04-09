import { describe, expect, it } from 'vitest';
import {
  invalidInteger,
  invalidNegativeInteger,
  invalidPositiveInteger,
  validInteger,
  validNegativeInteger,
  validPositiveInteger,
} from '../../fixtures/math/integer.ts';
import { integer, negativeInteger, positiveInteger } from './integer.ts';

describe('positiveInteger', () => {
  it.each(Object.entries(validPositiveInteger))('%s: %s', (_, value) => {
    expect(positiveInteger.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPositiveInteger))('%s: %s', (_, value) => {
    expect(positiveInteger.test(value)).toBe(false);
  });
});

describe('negativeInteger', () => {
  it.each(Object.entries(validNegativeInteger))('%s: %s', (_, value) => {
    expect(negativeInteger.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidNegativeInteger))('%s: %s', (_, value) => {
    expect(negativeInteger.test(value)).toBe(false);
  });
});

describe('integer', () => {
  it.each(Object.entries(validInteger))('%s: %s', (_, value) => {
    expect(integer.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidInteger))('%s: %s', (_, value) => {
    expect(integer.test(value)).toBe(false);
  });
});
