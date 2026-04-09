import { describe, expect, it } from 'vitest';
import {
  invalidPassport,
  validPassport,
} from '../../../../fixtures/countries/br/documents/passport.ts';
import { passport } from './passport.ts';

describe('passport', () => {
  it.each(Object.entries(validPassport))('%s: %s', (_, value) => {
    expect(passport.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidPassport))('%s: %s', (_, value) => {
    expect(passport.test(value)).toBe(false);
  });
});
