import { describe, expect, it } from 'vitest';
import { invalidCtps, validCtps } from '../../../../fixtures/countries/br/documents/ctps.ts';
import { ctps } from './ctps.ts';

describe('ctps', () => {
  it.each(Object.entries(validCtps))('%s: %s', (_, value) => {
    expect(ctps.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCtps))('%s: %s', (_, value) => {
    expect(ctps.test(value)).toBe(false);
  });
});
