import { describe, expect, it } from 'vitest';
import { invalidEnem, validEnem } from '../../../../fixtures/countries/br/codes/enem.ts';
import { enem } from './enem.ts';

describe('enem', () => {
  it.each(Object.entries(validEnem))('%s: %s', (_, value) => {
    expect(enem.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidEnem))('%s: %s', (_, value) => {
    expect(enem.test(value)).toBe(false);
  });
});
