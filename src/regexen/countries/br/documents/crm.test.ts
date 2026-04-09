import { describe, expect, it } from 'vitest';
import { invalidCrm, validCrm } from '../../../../fixtures/countries/br/documents/crm.ts';
import { crm } from './crm.ts';

describe('crm', () => {
  it.each(Object.entries(validCrm))('%s: %s', (_, value) => {
    expect(crm.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCrm))('%s: %s', (_, value) => {
    expect(crm.test(value)).toBe(false);
  });
});
