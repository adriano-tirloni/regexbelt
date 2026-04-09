import { describe, expect, it } from 'vitest';
import {
  invalidMunicipalRegistration,
  validMunicipalRegistration,
} from '../../../../fixtures/countries/br/government/municipal-registration.ts';
import { municipalRegistration } from './municipal-registration.ts';

describe('municipalRegistration', () => {
  it.each(Object.entries(validMunicipalRegistration))('%s: %s', (_, value) => {
    expect(municipalRegistration.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidMunicipalRegistration))('%s: %s', (_, value) => {
    expect(municipalRegistration.test(value)).toBe(false);
  });
});
