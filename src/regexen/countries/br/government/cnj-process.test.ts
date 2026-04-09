import { describe, expect, it } from 'vitest';
import {
  invalidCnjProcessFormatted,
  invalidCnjProcessStripped,
  validCnjProcessFormatted,
  validCnjProcessStripped,
} from '../../../../fixtures/countries/br/government/cnj-process.ts';
import { cnjProcessFormatted, cnjProcessStripped } from './cnj-process.ts';

describe('cnjProcessFormatted', () => {
  it.each(Object.entries(validCnjProcessFormatted))('%s: %s', (_, value) => {
    expect(cnjProcessFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnjProcessFormatted))('%s: %s', (_, value) => {
    expect(cnjProcessFormatted.test(value)).toBe(false);
  });
});

describe('cnjProcessStripped', () => {
  it.each(Object.entries(validCnjProcessStripped))('%s: %s', (_, value) => {
    expect(cnjProcessStripped.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCnjProcessStripped))('%s: %s', (_, value) => {
    expect(cnjProcessStripped.test(value)).toBe(false);
  });
});
